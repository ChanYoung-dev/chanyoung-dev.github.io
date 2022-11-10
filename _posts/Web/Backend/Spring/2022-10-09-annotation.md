---
permalink: /Backend/Spring/annotation/
title: "애노테이션을 사용한 파라미터 검증"
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
sexy: 1
main: "Spring"
header:
  teaser: https://i.ytimg.com/vi/o6-gRZfQqOE/maxresdefault.jpg
  overlay_image: https://i.ytimg.com/vi/o6-gRZfQqOE/maxresdefault.jpg
  overlay_filter: 0.5
excerpt: annotation 애노테이션을 이용하여 파라미터 체크
---

<span style = "font-size:1.5em;  font-weight: 700;">애노테이션<sup>annotation</sup>을 이용한 파라미터 체크</span><br>
일반적으로 클라이언트가 요구하는 데이터들(requestBody,pathParam, queryParam)은 전부 의심해야한다.<br>
즉, 항상 파라미터 검증을 해야한단 것이다.<br>
예를 들어 회원가입이라고 치면, 회원가입 입력부분에 관련 정책에 어긋난 입력이 들어올 경우 프론트단에서도 검증로직을 넣을 수 있다<br>
<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/194760873-ec9d2741-af71-45d1-a251-88cc81efef86.png'>
<figcaption align="center">회원가입 중 입력이 잘못될 경우..</figcaption>
</figure>
하지만 프론트단에서 검증을 하더라도 백에서 무조건 한번 더 검증을 해야한다.<br>
그렇다면 어떻게 검증하는 것이 좋을까 첫번째로는 annotation방법과 두번째로는 [Assertions 커스텀방법](https://chanyoung-dev.github.io/Backend/Spring/annotation/)이 있다  
-> 여기서는 annotation 방법을 알아보고 심화과정으로 annotation을 직접 커스텀해보자


# 의존성 추가
- validation을 사용하기 위해 의존성을 추가한다
- maven
  ```
  <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-validation -->
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
    <version>2.5.4</version>
  </dependency>
  ```

- gradle
  ```
  implementation 'org.springframework.boot:spring-boot-starter-validation'
  ```


# @valid
- 다음과 같이 `RequestBody` 앞에 `@valid`를 붙여야한다
  ```java
  public requestData(@Valid @RequestBody MemberRequest data)
  ```
- requestBody 뿐만 아니라 `ModelAttribute` 도 적용된다

# RequestBody
{% highlight java linenos %}
public class MemberRequest{

    @NotNull private String memberPw;

    @NotNull private String memberId;

    @NotNull private String memberName;

    ...
}
{% endhighlight %}
- null값이 들어오면 안되는 정책일 때, 위와 같이 `@NotNull`을 사용한다


위와 같은 방법은 좀만 구글링해도 많은 정보가 있다<br>
하지만 애노테이션을 만들어서 직접 검증로직을 넣는 방법은 자료가 별로 없었다
{: .notice--info}


# annotation
**NullCheck.interface**
{% highlight java linenos %}
@Retention(RetentionPolicy.RUNTIME) 
@Target({ElementType.FIELD}) // 필드에 적용
@Constraint(validatedBy = NullCheckValidator.class) 
public @interface NullCheck {
    String message() default "파라미터 오류"; // 기본 메세지

    Class[] groups() default {};

    Class[] payload() default {};

    String type() default "String"; // 어떤 로직을 사용할 것인가?
}
{% endhighlight %}

**NullCheckValidator.class**
{% highlight java linenos %}
public class NullCheckValidator implements ConstraintValidator<NullCheck, String> {
    private String type;

    public void initialize(NullCheck parameters) {
        this.type = parameters.type();
    }

    @Override public boolean isValid(String value, ConstraintValidatorContext context) {
        if ("String".equals(type)) {
            return !"".equals(CommonUtil.nvl(value)); // 관련 로직
        } else {
            return !(0 >= NumberUtils.toInt(value, 0)); //관련 로직2
        }
    }

}
{% endhighlight %}
- type에 따라 로직이 정해졌다고 가정해보자
- 위처럼 type라는 필드를 만들고 interface에도 같은 필드를 선언하면 된다

**RequestBody.class**
{% highlight java linenos %}
public class MemberRequest {

    @NullCheck(message = "패스워드를 입력해야합니다~") private String memberPw;

    @NullCheck(message = "아이디를 입력해야합니다~") private String memberId;

    @NullCheck(message = "이름을 입력해야합니다~") private String memberName;

    @NullCheck(message = "수량은 0보다 커야합니다~", type = "Number") private String orderCount;

    ...
}
{% endhighlight %}
- type default가 `String`으로 되어있기때문에 `type`는 `String`으로 되어있다.
- `type`를 지정하고 싶다면 9번라인처럼 `type`를 지정해주자


# 에러처리
`NullCheckValidator.class`에서 보이듯이 `ConstraintValidator`를 상속받기때문에 검증에 실제 어긋난 입력이 들어올 경우 `MethodArgumentNotValidException`이 터지게 된다  
이러한 Exception에서의 데이터를 가공하여 Response로 날리면 된다
```java
{
  "status_code": "400",
  "status_msg": "입력값을 받지못함",
  "paramValid": [
    {
      "fieldName": "memberId",
      "errorMessage": "아이디를 입력해야합니다~"
    },
    {
      "fieldName": "orderCount",
      "errorMessage": "수량은 0보다 커야합니다~"
    }
  ]
}

```

이것은 추후 [Exception처리에 따른 Response처리](https://chanyoung-dev.github.io/Backend/Spring/exceptionHandler/)에서 다루도록 하겠다~