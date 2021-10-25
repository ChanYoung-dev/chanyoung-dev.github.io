---
permalink: /Blog/Setting/sitemaperror/
title: "sitemap.xml 오류,에러 해결하기"
toc: true
comments: true
categories:
  - Blog🐨Setting
sidebar:
  - title: "Blog🐨"
  - nav: "Blog-menu"
excerpt: >
  "구글 검색 엔진 ( Google search console ) 중 sitemap.xml 에러"
---


# 구글 검색 엔진 ( Google search console ) 등록하기
환경 : jekyll, minimal mistakes, github pages

0. Google search console 접속하여 시작하기
1. github.io 주소를 도메인이 아닌 **url** 에 등록
2. HTML을 github.io의 루트(최상위 디렉토리)에 추가하여 소유권 인증
3. [sitemap.xml](https://github.com/wayhome25/wayhome25.github.io/blob/master/sitemap.xml)의 코드를 복사하여 루트 디렉토리에 site.xml명으로 붙여넣기
4. 색인의 sitemaps -> 새 사이트맵 추가 -> sitemap.xml 입력
5. 끝



## 오류
하지만 다음과 같은 오류가 발생하였다.

자신의 주소/sitemap.xml을 들어가면

```html
This page contains the following errors:
error on line 549 at column 72: EntityRef: expecting ';'
Below is a rendering of the page up to the first error.
```

또한, google console search 에서는
![]({{site.baseurl}}/assets/images/blog/site.png)


위와 같은 문제를 해결하기 위해서는 **포스트 이름이나 경로 이름안에 &가 들어간 것을 제거해주면 된다.**

제거한뒤 자신의 주소/sitemap.xml을 들어가서 다음과 같이 뜨면 정상이다.




![]({{site.baseurl}}/assets/images/blog/site2.png)