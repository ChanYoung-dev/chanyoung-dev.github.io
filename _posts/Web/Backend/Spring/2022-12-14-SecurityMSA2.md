---
permalink: /Backend/Spring/SecurityMSA2/
title: "JWT + Spring Security + Spring Cloud = MSA 2. 환경세팅"
toc: true
categories:
  - Backend🦄Spring
comments: true
sidebar:
  - title: "Backend🦄"
  - nav: "Backend-menu"
tags:
  - Spring
  - Java
  - Spring Security
  - Eureka
  - jwt
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