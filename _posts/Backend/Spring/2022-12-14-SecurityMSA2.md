---
permalink: /Backend/Spring/SecurityMSA2/
title: "JWT + Spring Security + Spring Cloud = MSA 2. Spring Security"
toc: true
categories:
  - Backend🐛Spring
comments: true
sidebar:
  - title: "Backend🐛"
  - nav: "Backend-menu"
tags:
  - Spring
  - Java
  - Spring Security
  - msa
sexy: 1
main: "Spring"
header:
  teaser: https://images.velog.io/images/park9910/post/dc139b53-7a2c-4973-ba88-23fb96b06b2e/image.png
  overlay_image: https://images.velog.io/images/park9910/post/dc139b53-7a2c-4973-ba88-23fb96b06b2e/image.png
  overlay_filter: 0.5
excerpt: \#Spring Security \#SpringSecurity \#Login \#jwt \#Eureka \#msa
---

<span style = "font-size:1.5em;  font-weight: 700;">Spring Security, Spring Cloud, JWT, MSA</span><br>
[JWT + Spring Security + Spring Cloud = MSA 1. 환경세팅](https://chanyoung-dev.github.io/Backend/Spring/SecurityMSA)에 이어서 <strong>Spring Security</strong>를 본격적으로 사용해보자<br>
{: .notice--intro}

- 참고로 [JWT + Spring Security + Spring Cloud = MSA 1. 환경세팅](https://chanyoung-dev.github.io/Backend/Spring/SecurityMSA)에서 등록한 discovery에서 `user-service`프로젝트이다

Spring Security에 대해 기본적인 것을 안다는 가정하에 진행하였다. Spring Security에 대한 자세한 설명은 [Spring Security를 이용한 로그인 처리](https://chanyoung-dev.github.io/Backend/Spring/LoginBySecurity)에서 상세하게 설명하였다
{: .notice--success}

> Spring Security는 기본적으로 세션공유를 전제로 로그인 처리한다. 하지만 MSA 방식에서 세션 공유가 까다롭기때문에 jwt 토큰방식으로 처리하였다. 이를 위해 Spring Security를 전부다 커스텀 진행


<span style = "font-size:1.5em;  font-weight: 700;">Security 항목</span><br>
전체적인 로그인 검증 필터 : `AuthenticationFilter`<br>
성공 실패 판단: `CustomAuthenticationProvider`<br>
성공시 처리: `AuthenticationFilter.successfulAuthentication`<br>
실패시 처리: `AuthFailureHandler`<br>
{: .notice--info}

# 1. WebSecurity
```java
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurity extends WebSecurityConfigurerAdapter {

    private final UserService userService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final Environment env;
    private final JwtTokenProvider jwtTokenProvider;
    private final CustomAuthenticationProvider authProvider;

    private final AuthFailureHandler authFailureHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();

        http.authorizeRequests().antMatchers("/**")
                .hasIpAddress("127.0.0.1") //127.0.0.1에서 접속하는 모든 서비스요청은 권한없이 사용 가능하다
                .antMatchers("/css/**").permitAll()
                .and()
                .addFilter(getAuthenticationFilter()); // Spring Security에서 제공하는 로그인 인증 툴을 사용안하고 직접 인증 필터를 만든다

        http.headers().frameOptions().disable(); // for H2 frame
    }

    private AuthenticationFilter getAuthenticationFilter() throws Exception {
        AuthenticationFilter authenticationFilter = new AuthenticationFilter(authenticationManager(), userService, env, jwtTokenProvider);
        authenticationFilter.setFailureHandler(authFailureHandler); //로그인 실패 핸들러 주입
        return authenticationFilter;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authProvider);
        auth.userDetailsService(userService).passwordEncoder(bCryptPasswordEncoder);
    }


}
```
`JwtTokenProvider`는 Jwt관련유틸이다. 아래에 설명추가

## 첫번째 configure
```java
@Override
protected void configure(HttpSecurity http) throws Exception {
    http.csrf().disable();

    http.authorizeRequests().antMatchers("/**")
            .hasIpAddress("127.0.0.1") //127.0.0.1에서 접속하는 모든 서비스요청은 권한없이 사용 가능하다
            .antMatchers("/css/**").permitAll()
            .and()
            .addFilter(getAuthenticationFilter()); // Spring Security에서 제공하는 로그인 인증 툴을 사용안하고 직접 인증 필터를 만든다

    http.headers().frameOptions().disable(); // for H2 frame
}

private AuthenticationFilter getAuthenticationFilter() throws Exception {
        AuthenticationFilter authenticationFilter = new AuthenticationFilter(authenticationManager(), userService, env, jwtTokenProvider);
        authenticationFilter.setFailureHandler(authFailureHandler); //로그인 실패 핸들러 주입
        return authenticationFilter;
    }
```
- `addFilter(getAuthenticationFilter());`를 통해 `AuthenticationFilter`를 사용한다고 명시한다. 즉, *Spring Security*에서 제공하는 로그인 필터를 사용안하고 직접 인증 필터만들어 사용한다. 이 필터는 `CustomAuthenticationProvider`에게 로그인을 시도하라고 명령을 내리고 로그인검증에서 전달된 결과(성공or실패)에 따라 로직을 실행한다. 


## 두번째 configure
```java

@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.authenticationProvider(authProvider);
    auth.userDetailsService(userService).passwordEncoder(bCryptPasswordEncoder);
}

```
- `CustomAuthenticationProvider`를 주입한다. 사용자가 로그인 폼을 입력할 시 `CustomAuthenticationProvider`를 통해 로그인 성공이나 실패를 판단한다.

# 2. JWT
- jwt 관련 유틸함수
- application.yaml에서 지정한 값들을 `@Value`통해 사용한다

```java
@Component
@Slf4j
public class JwtTokenProvider {

    @Value("${token.access-expired-time}")
    private long ACCESS_EXPIRED_TIME;

    @Value("${token.refresh-expired-time}")
    private long REFRESH_EXPIRED_TIME;

    @Value("${token.secret}")
    private String SECRET;

    public String getUserId(String token) {
        return getClaimsFromJwtToken(token).getSubject();
    }

    public String getRefreshTokenId(String token) {
        return getClaimsFromJwtToken(token).get("value").toString();
    }

    public List<String> getRoles(String token) {
        return (List<String>) getClaimsFromJwtToken(token).get("roles");
    }

    public void validateJwtToken(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token);
        } catch (SignatureException | MalformedJwtException |
                 UnsupportedJwtException | IllegalArgumentException | ExpiredJwtException jwtException) {
            throw jwtException;
        }
    }

    private Claims getClaimsFromJwtToken(String token) {
        try {
            return Jwts.parser().setSigningKey(SECRET)
                    .parseClaimsJws(token).getBody();
        } catch (ExpiredJwtException e) {
            return e.getClaims();
        }
    }

    public Date getExpiredTime(String token) {
        return getClaimsFromJwtToken(token).getExpiration();
    }

    public String createJwtAccessToken(String userId, String uri, UserRole role) {
        Claims claims = Jwts.claims();
        claims.put("role", role);
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userId)
                .setExpiration(
                        new Date(System.currentTimeMillis() + ACCESS_EXPIRED_TIME)
                )
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .setIssuer(uri)
                .compact();

    }

    public String createJwtRefreshToken() {
        Claims claims = Jwts.claims();
        claims.put("value", UUID.randomUUID());

        return Jwts.builder()
                .addClaims(claims)
                .setExpiration(
                        new Date(System.currentTimeMillis() + REFRESH_EXPIRED_TIME)
                )
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }
}
```

# 3. 필터 구현

```java
/**
 * 로그인 처리 필터
 * @author 김찬영
 */
@Slf4j
public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private UserService userService;
    private Environment env;
    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    public AuthenticationFilter(AuthenticationManager authenticationManager,
                                UserService userService,
                                Environment env, JwtTokenProvider jwtTokenProvider){
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
        this.env = env;
        super.setAuthenticationManager(authenticationManager);
    }

    /**
     * 인증 시도
     * <p>입력받은 값을 인증 토큰에 저장
     * <p>이후 {@link CustomAuthenticationProvider#authenticate(Authentication)}로 전달한다
     */
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {

        try{
            RequestLogin creds = new ObjectMapper().readValue(request.getInputStream(), RequestLogin.class);
            if (creds==null){
                throw new NoActivatedException("hello");
            }
            return getAuthenticationManager().authenticate(
                    new UsernamePasswordAuthenticationToken(
                            creds.getEmail(),
                            creds.getPassword(),
                            new ArrayList<>()
                    )
            );
        } catch(IOException e) {
            throw new RuntimeException(e);
        }

    }

    /**
     * 로그인 성공시 처리
     * <p> JWT 토큰을 발행하고 쿠키에 토큰 값을 저장한다
     */
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            FilterChain chain, Authentication authResult)
            throws IOException, ServletException {
        String userName = ((User)authResult.getPrincipal()).getUsername();
        UserDto userDetails = userService.getUserDetailsByEmail(userName);

        String token = jwtTokenProvider.createJwtAccessToken(
                userDetails.getId(),
                request.getRequestURI(),
                userDetails.getRole()
                );

        ResponseCookie cookie = ResponseCookie.from("token", token)
                .sameSite("Strict")
                .path("/")
                .build();
        response.addHeader("Set-Cookie", cookie.toString() + ";HttpOnly");
        response.addHeader("token", token);
    }

    /**
     * 실패 핸들러({@link AuthFailureHandler})를 직접 주압한다
     */
    public void setFailureHandler(AuthenticationFailureHandler failureHandler) {
        Assert.notNull(failureHandler, "FailureHandler가 없습니다");
        super.setAuthenticationFailureHandler(failureHandler);
    }

}
```

- `attemptAuthentication`: 로그인검증처리기(`AuthenticationProvider`)에게 로그인 검증을 명령한다. 사용자가 로그인화면에서 입력한 아이디, 비밀번호를 **request**와 함께 전송되고 전달받은 로그인 정보를 만들어둔 `RequestLogin`로 변환하여 로그인검증처리기에게 전달한다
  - **RequestLogin**
    ```java
      @Data
      @AllArgsConstructor
      @NoArgsConstructor
      public class RequestLogin {

          @NotNull(message = "Email cannot be null")
          @Size(min = 2, message = "Email not be less than two characters")
          @Email
          private String email;

          @NotNull(message = "Password cannot be null")
          @Size(min = 8, message = "Password must be equals or greater than 8 characters")
          private String password;

          @NotNull(message = "Nickname cannot be null")
          @Size(min = 8, message = "Password must be equals or greater than 8 characters")
          private String nickName;
      }
    ```

- `successfulAuthentication`: 로그인 검증이 성공한다면 JWT 토큰을 발행하고 쿠키에 토큰 값을 저장한다
- `setFailureHandler`: 로그인 실패시 실행할 핸들러를 주입해준다. 
  - 이 함수는 위에서 본 [WebSecurity](#1-websecurity)에서 `setFailureHandler`를 호출하여 사용하는데 이 때 만들어둔 커스텀 핸들러를 주입해주었다([AuthFailureHandler](#4-로그인-exception-handler))
    ```java
      public class WebSecurity extends WebSecurityConfigurerAdapter {

        ...

        private final AuthFailureHandler authFailureHandler;
        
        private AuthenticationFilter getAuthenticationFilter() throws Exception {
            AuthenticationFilter authenticationFilter = new AuthenticationFilter(authenticationManager(), userService, env, jwtTokenProvider);
            authenticationFilter.setFailureHandler(authFailureHandler); //로그인 실패 핸들러 주입
            return authenticationFilter;
        }

        ...

    }

    ```

# 3. 로그인 검증기
- 로그인을 검증한다

```java
/**
 * DB에 있는 사용자 정보를 토대로 검증 시작
 * @author 김찬영
 */
@Component
@RequiredArgsConstructor
public class CustomAuthenticationProvider implements AuthenticationProvider {
    private final PasswordEncoder passwordEncoder;

    private final UserDetailsService customUserDetailsService;


    /**
     *
     * @param authentication
     * @return
     * @throws AuthenticationException
     */
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        if(authentication == null){
            throw new InternalAuthenticationServiceException("인증 정보가 없습니다");
        }
        String username = authentication.getName();
        if(authentication.getCredentials() == null){
            throw new AuthenticationCredentialsNotFoundException("Credentials이 없습니다");
        }
        String password = authentication.getCredentials().toString();
        try {
            /* 사용자 정보 받기 */
            UserDetails loadedUser = customUserDetailsService.loadUserByUsername(username);
            if (loadedUser == null) {
                throw new InternalAuthenticationServiceException("유저정보가 입력되지않았습니다");
            }
            if (!loadedUser.isAccountNonLocked()) {
                throw new LockedException("잠긴 계정입니다");
            }
            if (!loadedUser.isEnabled()) {
                throw new DisabledException("탈퇴한 계정입니다");
            }
            if (!loadedUser.isAccountNonExpired()) {
                throw new AccountExpiredException("기한 만료 계정입니다");
            }
            /* 실질적인 인증 시작 */
            if (!passwordEncoder.matches(password, loadedUser.getPassword())) {
                throw new BadCredentialsException("패스워드가 올바르지 않습니다");
            }
            if (!loadedUser.isCredentialsNonExpired()) {
                throw new CredentialsExpiredException("인증기한이 만료되었습니다");
            }
            /* 인증 완료 */
            UsernamePasswordAuthenticationToken result = new UsernamePasswordAuthenticationToken(loadedUser, null, loadedUser.getAuthorities());
            result.setDetails(authentication.getDetails());
            return result;
        }
        catch (NoActivatedException e){
            throw new NoActivatedException("해당 아이디는 없습니다");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
    }
}

```
- try 구문 안쪽 `UserDetails loadedUser = customUserDetailsService.loadUserByUsername(username);`를 통해 로그인 정보를 확인한다.
-  customUserDetailsService는 인터페이스 `UserDetailsService`이고 구현체는 직접 만든 `UserService`를 사용한다
   -  **UserService**
      ```java
      public class UserService implements UserDetailsService {

        ...

        @Override
        public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

            UserEntity userEntity = userRepository.findByEmail(username).orElseThrow(()->new NoActivatedException("해당유저는 없습니다"));

            // 삭제된계정인 경우
            if(userEntity.getActive()=="0")
                return new User(userEntity.getEmail(), userEntity.getEncryptedPwd(),
                        false, true, true, true,
                        new ArrayList<>());

            // 인증이 되지않은 회원
            if(userEntity.getRole().equals(UserRole.ROLE_NOT_PERMITTED))
                return new User(userEntity.getEmail(), userEntity.getEncryptedPwd(),
                        true, true, true, false,
                        new ArrayList<>());


            return new User(userEntity.getEmail(), userEntity.getEncryptedPwd(),
                    true, true, true, true,
                    new ArrayList<>());
        }

        ...

      }
      ```
      - DB에서 유저데이터를 가져오고 아이디/비밀번호를 체크하기전에 DB에서 가져온 정보를 바탕으로 유저의 유효성 체크를 진행하고 그에 따른 `User`를 return한다. 이때 `User`는 스프링 시큐리티의 객체이다.
      - 위 함수에서 반환된 값이 호출한 `AuthenticationProvider`로 전달된다
- `loadUserByUsername`에 의해 반환된 User데이터를 검증한다. `passwordEncoder.matches(password, loadedUser.getPassword()`에서 비밀번호 검증을 하는 것을 확인할 수 있다. 로그인 성공이 아닐 경우, *Exception*을 던지고 이 *Exception*은 `AuthenticationFailureHandler`에서 처리한다

# 4. 로그인 Exception Handler

```java
@Component
public class AuthFailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {

        // 한글 사용
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");

        String errorMsg = "";

        if(exception instanceof AccountExpiredException){
            response.setStatus(HttpServletResponse.SC_CONFLICT);
            errorMsg = "만료된 회원입니다";
        }
        if(exception instanceof DisabledException){
            response.setStatus(HttpServletResponse.SC_CONFLICT);
            errorMsg = "탈퇴한 회원입니다";
        }
        if(exception instanceof NoActivatedException){
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            errorMsg = "아이디나 패스워드가 올바르지않습니다.";
        }
        if(exception instanceof BadCredentialsException){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            errorMsg = "아이디나 패스워드가 올바르지않습니다.";
        }
        if(exception instanceof LockedException){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            errorMsg = "이메일 인증이 필요합니다.";
        }
        response.getWriter().print(errorMsg);
        response.getWriter().flush();

    }
}
```
- `AuthenticationProvider`에서 던진 *Exception*에 따라 에러메세지를 클라이언트에게 반환하여 보여준다.

여기서 `AuthFailureHandler`는 어디서 주입했더라
{: .notice--success}

```java
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurity extends WebSecurityConfigurerAdapter {

    private final UserService userService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final Environment env;
    private final JwtTokenProvider jwtTokenProvider;
    private final CustomAuthenticationProvider authProvider;

    private final AuthFailureHandler authFailureHandler;

    ...

    private AuthenticationFilter getAuthenticationFilter() throws Exception {
        AuthenticationFilter authenticationFilter = new AuthenticationFilter(authenticationManager(), userService, env, jwtTokenProvider);
        authenticationFilter.setFailureHandler(authFailureHandler); //로그인 실패 핸들러 주입
        return authenticationFilter;
    }

    ...

}

```
[WebSecurity](#1-websecurity)에서 `setFailureHandler`를 통해 주입하고 이 함수는 `AuthenticationFilter`에서 구현되었다.
```java
@Slf4j
public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private UserService userService;
    private Environment env;
    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    public AuthenticationFilter(AuthenticationManager authenticationManager,
                                UserService userService,
                                Environment env, JwtTokenProvider jwtTokenProvider){
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
        this.env = env;
        super.setAuthenticationManager(authenticationManager);
    }

    ...

    /**
     * 실패 핸들러({@link AuthFailureHandler})를 직접 주압한다
     */
    public void setFailureHandler(AuthenticationFailureHandler failureHandler) {
        Assert.notNull(failureHandler, "FailureHandler가 없습니다");
        super.setAuthenticationFailureHandler(failureHandler);
    }

}
```
- `super`를 통해 부모클래스를 확인해보면

<figure align="center" class="half">
<img alt="image" src='https://user-images.githubusercontent.com/46098949/211032780-ac19a932-2345-45c3-a1a6-c928feeab678.png'>
<img alt="image" src='https://user-images.githubusercontent.com/46098949/211034843-0d5a55a0-0ce7-4a9c-8ed5-014a36fc0349.png'>
<figcaption align="center">부모클래스 AbstractAuthenticationProcessingFilter</figcaption>
</figure>
<br>
<br>
부모클래스에서 해당 함수가 구현되어있는 것을 확인할 수 있다.