---
permalink: /Backend/Spring/exceptionHandler/
title: "REST API - Exception을 통하여 HTTP Response 처리 "
toc: true
categories:
  - Java🐛Spring
comments: true
sidebar:
  - title: "Java🐛"
  - nav: "Backend-menu"
tags:
  - Spring
  - Java
  - Rest API
sexy: 1
main: "Spring"
header:
  teaser: https://www.computerhope.com/jargon/e/exception.jpg
  overlay_image: https://www.computerhope.com/jargon/e/exception.jpg
  overlay_filter: 0.5
excerpt: \#ExceptionHandler  \#Exception  \#ControllerAdvice \#RestAPI \#Rest API
---

<span style = "font-size:1.5em;  font-weight: 700;">Exception 처리를 통해 HTTP Response 처리</span><br>
Exception 처리를 통해 404나 400으로 HTTP 통신을 해보자
Exception은 `@valid`나 지난 포스팅한 글인 [커스텀한 애노테이션을 통해 파라미터 검증하기](https://chanyoung-dev.github.io/Backend/Spring/annotation/)를 통해 일어난 `MethodArgumentNotValidException`이라고 가정  
`MethodArgumentNotValidException`아니더라도 모든 Exception에 적용이 가능하다
{: .notice--info}


# 1. 들어오는 파라미터
{% highlight java linenos %}
public class MemberRequest {

    @NullCheck(message = "패스워드를 입력해야합니다~") private String memberPw;

    @NullCheck(message = "아이디를 입력해야합니다~") private String memberId;

    @NullCheck(message = "이름을 입력해야합니다~") private String memberName;

    @NullCheck(message = "수량은 0보다 커야합니다~", type = "Number") private String orderCount;

    @NotNull private String phoneNumber;

    ...
}
{% endhighlight %}
- [전 포스팅](https://chanyoung-dev.github.io/Backend/Spring/annotation/)에서 만든 `@NullCheck`나 `@NotNull`을 통해 파라미터 검증이 실패하면 `MethodArgumentNotValidException`이 터지게 된다
<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/194806870-b70f2aec-b1f9-4d38-853a-fabd535e800b.png'>
<figcaption align="center">맨 하단을 보면 MethodArgumentNotValidException이 터지고 스프링에서 만들어진 DefaultHandlerExceptionResolver가 처리하고있다</figcaption>
</figure>
<br>
<br>

이렇게 터진 Exception을 ExceptionHandler로 처리해보자
- 1. Response Body부분을 담당할 ErrorResponse 클래스를 만들어놓고
- 2. ExceptionHandler를 통해 Exception에 있는 에러데이터를 사용하여 ErrorResponse에 담아두자
- 3. 그 뒤, ResponseEntity에 ErrorResponse를 담아서 반환한다

# 2. 필요한 클래스
## 2.1 ErrorResponse
{% highlight java linenos %}
@Getter
public class ErrorResponse {

    private final String status_code;
    private final String status_msg;
    private List<ValidationTuple> validation;

    @Builder
    public ErrorResponse(String code, String message, List<ValidationTuple> validation) {
        this.code = code;
        this.message = message;
        this.validation = validation != null ? validation: new ArrayList<ValidationTuple>();
    }
}
{% endhighlight %}

## 2.2 ValidationTuple
{% highlight java linenos %}
@RequiredArgsConstructor
@Getter
public class ValidationTuple {
    private final String fieldName;
    private final String errorMessage;
}
{% endhighlight %}
- `@RequiredArgsConstructor`을 안 쓰고 생성자를 써도 된다
- `@RequiredArgsConstructor`는 생성자가 하나만 있어도 될경우 알아서 모든필드인자를 갖는 생성자를 만들어준다

## 2.3 ControllerAdvice
{% highlight java linenos %}
@ResponseStatus(HttpStatus.BAD_REQUEST)
@ExceptionHandler(MethodArgumentNotValidException.class)
@ResponseBody
public ErrorResponse invalidRequestHandler(MethodArgumentNotValidException e) {

    List<ValidationTuple> errorList = e.getFieldErrors().stream()
                .map(x -> new ValidationTuple(x.getField(), x.getDefaultMessage()))
                .collect(Collectors.toList());

    //만약 e.getFieldErrors()가 안 뜬다면?
//        List<ValidationTuple> errorFields = e.getBindingResult().getFieldErrors().stream()
//            .map(x -> new ValidationTuple(x.getField(), x.getDefaultMessage()))
//            .collect(Collectors.toList());

    ErrorResponse response = ErrorResponse.builder()
            .status_code("400")
            .status_msg("잘못된 요청입니다.")
            .validation(errorList)
            .build();

    return response;
}
{% endhighlight %}
- `MethodArgumentNotValidException`가 `BindException`을 상속받은 것이 아니라 `Exception`을 상속받는 것이면 주석을 사용한다
- 1번째라인을 보면 `BAD_REQUEST(=400)`을 Response한다고 지정하였다

# 3. 결과
```json
{
  "status_code": "400",
  "status_msg": "잘못된 요청입니다.",
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

# cf. 테스트코드 - JUNIT5
{% highlight java linenos %}
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Commit;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest 
@AutoConfigureMockMvc 
@Transactional 
class ControllerTest {

    @Autowired private MockMvc mockMvc;

    @Autowired private ObjectMapper objectMapper;


    @Test @DisplayName("파라미터오류") void createNoParam() throws Exception {


        MemberRequest request = new MemberRequest();

        //request.setMemberId("em123412");
        //request.setOrderCount("0");
        request.setMemberPw("12341234");
        request.setMemberName("김찬숙");
        request.setPhoneNumber("01091921312")


        String json = objectMapper.writeValueAsString(request);


        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/barcodes")
                .contentType(MediaType.APPLICATION_JSON) //기본값
                .content(json))
            .andExpect(MockMvcResultMatchers.jsonPath("$.status_msg").value("잘못된 요청입니다."))
            .andExpect(MockMvcResultMatchers.jsonPath("$.status_code").value("400"))
            .andDo(MockMvcResultHandlers.print());

    }
{% endhighlight %}


결과
```
MockHttpServletResponse:
           Status = 400
    Error message = null
          Headers = [Content-Type:"text/plain;charset=UTF-8", Content-Length:"279"]
     Content type = text/plain;charset=UTF-8
             Body = {"status_code":"400","status_msg":"잘못된 요청입니다.","validation":[{"fieldName":"memberId","errorMessage":"아이디를 입력해야합니다~"},{"fieldName":"orderCount","errorMessage":"수량은 0보다 커야합니다~"}]}
    Forwarded URL = null
   Redirected URL = null
          Cookies = []
```