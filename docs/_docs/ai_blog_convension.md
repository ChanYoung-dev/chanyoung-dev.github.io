# AI 블로그 글 작성 명령 참조 파일 (ChanYoung Style)

## 1. 블로그 기본 컨셉 & 톤
- 대상: 개발자
- 문체: 설명형, 회고형, 모든 문장은 ~한다 / ~이다 체

---

## 2. 글 시작 규칙 (필수)

### 도입부 템플릿
```html
<span style = "font-size:1.5em;  font-weight: 700;">Spring Security, Spring Cloud, JWT, MSA</span><br>
**Spring Security**, **Spring Cloud**, **JWT**를 사용하여 MSA환경에서의 서비스를 구축하였다. 게시판 서비스를 구축하였는데 이번 포스팅에서는 로그인 시스템만 포커스를 두어서 포스팅하려한다<br>
{: .notice--info}
```

### 마무리 템플릿
```markdown
<span style = "font-size:1.5em;  font-weight: 700;">결론</span><br>
내용..
{: .notice--success}
```

---

## 3. Notice 템플릿
- 예시
```markdown
위와 같은 방법은 좀만 구글링해도 많은 정보가 있다
하지만 애노테이션을 만들어서 직접 검증로직을 넣는 방법은 자료가 별로 없었다
{: .notice--danger}
```

- 예시2
```html
<span style = "font-size:1.5em;  font-weight: 700;">Repeatable Read에서 UPDATE는 스냅샷을 볼까?</span><br>
  아니다.<br>
  Repeatable Read에서도 다음과 같이 동작한다.<br>
  SELECT → 스냅샷 기준 조회 (Snapshot Read)<br>
  UPDATE / DELETE / SELECT FOR UPDATE → 최신 데이터 기준 (Current Read)<br>
  즉, 문제의 원인은 UPDATE가 아니다.<br>
  문제는 스냅샷 기반 SELECT 결과를 검증 수단으로 신뢰한 설계다.<br>
  {: .notice--success}
```
줄바꿈은 br태그를 넣어줘야하며 문단내제목은 `<span style = "font-size:1.5em;  font-weight: 700;">`태그를 이용한다.

- 잘못된 예시
```markdown
<span style = "font-size:1.5em;  font-weight: 700;">Oracle, MSA, Concurrency Control, Lock Strategy</span><br>
**Oracle**, **MSA** 환경에서 재고·잔액·포인트와 같은 핵심 자원을 다루며 동시성 제어 문제를 해결하였다. 실무에서 가장 많이 받는 질문은 다음 네 가지이다.<br>
- 낙관적 락과 비관적 락의 개념과 장단점은 무엇인가<br>
- 어떤 상황에서 어떤 락을 선택해야 하는가<br>
- MSA와 Oracle을 사용하면 무조건 낙관적 락이 정답인가<br>
- 왜 MSA에서는 비관적 락보다 낙관적 락이 더 자주 선택되는가<br>
이번 포스팅에서는 위 질문에 대해 하나의 흐름으로 정리한다.
{: .notice--info}

```
`-`를 넣으면 안된다 대신 특수문자(▪️)를 넣자

```markdown
<span style = "font-size:1.5em;  font-weight: 700;">Oracle, MSA, Concurrency Control, Lock Strategy</span><br>
**Oracle**, **MSA** 환경에서 재고·잔액·포인트와 같은 핵심 자원을 다루며 동시성 제어 문제를 해결하였다. 실무에서 가장 많이 받는 질문은 다음 네 가지이다.<br>
▪️ 낙관적 락과 비관적 락의 개념과 장단점은 무엇인가<br>
▪️ 어떤 상황에서 어떤 락을 선택해야 하는가<br>
▪️ MSA와 Oracle을 사용하면 무조건 낙관적 락이 정답인가<br>
▪️ 왜 MSA에서는 비관적 락보다 낙관적 락이 더 자주 선택되는가<br>
이번 포스팅에서는 위 질문에 대해 하나의 흐름으로 정리한다.
{: .notice--info}

```




- 정보: {: .notice--info}
- 부가정보: {: .notice--danger}
- 주의: {: .notice--warning}
- 매우중요: {: .notice--primary}
- 참고: {: .notice--success}
- 궁긍증: {: .notice}

위와 같은 상황일때만 사용한다.

---

## 4. 코드 블록 규칙보
### Jekyll highlight (우선)
```liquid
{% highlight java linenos %}
public class OrderService {}
{% endhighlight %}
```

### 보조 코드
```java
public void pay() {}
```

```
마크다운 문법(백틱)을 이용한 코드작성시 백틱만 사용하지않고 백틱과 기술이름을 같이 적어서 기술 하이라이팅이 적용되도록 해야한다.
```


---

## 5. 이미지 규칙 (1장)
```html
<figure align="center">
  <img width="805" src="IMAGE_URL">
  <figcaption align="center">설명</figcaption>
</figure>
<br>
```

# 이미지 규칙(2장)
```html
<figure class="half">
  <a href="link"><img src="이미지경로"></a>
  <a href="link"><img src="이미지경로"></a>
  <figcaption>2개이미지.</figcaption>
</figure>
```

# 이미지 규칙(3장)
```html
<figure class="thrid">
  <a href="link"><img src="이미지경로"></a>
  <a href="link"><img src="이미지경로"></a>
  <figcaption>3개이미지</figcaption>
</figure>
```

---

## 6.텍스트를 작게

텍스트 끝에 `{: .small}` 추가
- #### 적용
<cite>Steve Jobs</cite> --- Apple Worldwide Developers' Conference, 1997
{: .small}

## 7.테이블

```markdown
| 이름             | 봉금    |                                                              |
| --------        | ------ | ------------------------------------------------------------ |
| [김찬영](#link)   | 1억원   | 그는 너무 지나치게 일을 잘하고 아주 스펙타클합니다. 믿을 수가 없어요.        |
| [김지언](#link)   | 100원  | 그는 노는 것을 좋아합니다. 롤을 무진장 못해요.                          |
| [남의현](#link)   | -1억원  | 고자입니다.                                                     |
| [강민숙](#link)   | 0원    | 여성스러우면서 섬세한 성격을 갖고 술고래입니다.                           |

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=============================|
| Foot1   | Foot2   | Foot3   |
```



---

## 7. 작성 철학
- 문체: ~한다 체

