# AI 블로그 글 작성 명령 참조 파일 (ChanYoung Style)

## 1. 블로그 기본 컨셉 & 톤
- 대상: 개발자
- 문체: 설명형, 회고형, 모든 문장은 ~한다 / ~이다 체

---

## 2. 글 시작 규칙 (필수)

### 기술 스택 강조
```html
<span style = "font-size:1.5em;  font-weight: 700;">Spring Security, Spring Cloud, JWT, MSA</span><br>
**Spring Security**, **Spring Cloud**, **JWT**를 사용하여 MSA환경에서의 서비스를 구축하였다. 게시판 서비스를 구축하였는데 이번 포스팅에서는 로그인 시스템만 포커스를 두어서 포스팅하려한다<br>
{: .notice--info}
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

- 정보: {: .notice--info}
- 부가정: {: .notice--danger}
- 주의: {: .notice--warning}
- 매우중요: {: .notice--primary}
- 참고: {: .notice--success}
- 중요: {: .notice}

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


## 7. 기본 글 구조
```markdown
## 1. WHY
## 2. 기존 한계
## 3. HOW
## 4. IMPACT
## 5. 정리
```


---

## 7. 작성 철학
- 문체: ~한다 체

