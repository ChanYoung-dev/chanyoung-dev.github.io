---
permalink: /Web/Frontend/Javascript/NotionInHTML/
title: "notion page를 웹사이트에 삽입하기"
toc: true
categories:
  - Web🐮Frontend
comments: true
sidebar:
  - title: "Web🐮"
  - nav: "Web-menu"
tags:
  - Javascript
  - notion
  - python

---


# What?

포트폴리오로 사용하는 [웹사이트](https://chanyoung-dev.github.io/Profile)가 있다. 

이 웹사이트에

- [노션으로 만든 페이지](https://www.notion.so/d23d460f2e554944bf60448e47f982ef?v=276ea58f112f4444adce1478ec19a31b)

위 페이지를 넣으려 한다. 단순히 페이지만 넣는게 아니라 노션페이지 안에 있는 다양한 노션링크들도 프레임안에서 동작하도록 구성한다.


{% include video id="qCb96cl0Z4E" provider="youtube" %}

이런식으로 웹에 notion 페이지를 넣어보자

실행하기에 앞서 장점과 단점들이 명확하다

### 장점

- 노션의 편리한 기능들을 어느 페이지에서나 사용할 수 있다.
- 노션페이지 한개 뿐만 아니라 페이지안에서의 노션페이지들도 상호작용하여 사용할 수 있다

### 단점

- 노션 페이지의 이름은 영어로 되어야한다
- 노션 페이지의 링크들은 북마크로 생성되어야한다
    - 멘션, 미리보기로 링크를 넣으면 `<a>`  링크가 동작하지않는다
- code highlight가 불가능하다
- 노션페이지가 아닌 외부사이트는 전체화면으로 나타난다

# In notion

넣는 방법은 내보내기 기능을 이용한다

![Untitled]({{site.baseurl}}/assets/images/Web/Untitled.png){: .align-center}

내보내기에서는 PDF, HTML, Markdown 이 있는데 홈페이지에 이용하기위해서는 `HTML`을 사용해준다


💡 주의할점은 페이지 안에 있는 링크들의 제목은 전부 영어로 되어야 한다. 안에 있는 내용은 영어든 한글이든 상관없다.
{: .notice--info}

파일을 다운받고 압축을 풀면 다음과 같은 화면이 뜬다

![Untitled1]({{site.baseurl}}/assets/images/Web/Untitled1.png){: .align-center}

여기서 

- `hellodev ~ . html`  : 처음 노션페이지를 보여주는 html

- `hellodev ~982ef` 디렉토리 : `hellodev ~ . html`  안에 있는 노션페이지들의 링크들 html과 이미지 파일들이 있다.

이 파일들을 웹사이트 파일안으로 옮기자


ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ


# HTML

이제 이 html들을 보여주기 위해 html코드를 짜보자

```html
<embed id="htmlbox" src="hellodev d23d460f2e554944bf60448e47f982ef.html" width="100%" height="1000px"/>
<button class="backbtn" onclick="history.back()">뒤로 가기</button>
```

- `embed`와 `iframe` 차이
    - 노션페이지 안에서 노션페이지 링크를 클릭시
        - `embed` : 프레임 안에서 노션페이지가 보여진다
        - `iframe` : 전체화면으로 노션페이지가 보여진다
    - 노션페이지 안에서 외부 웹 링크를 클릭시
        - `embed`: 접속되지않는다 → 이를 해결하기 위해 아래의 `javascript` 를 이용한다
        - `iframe`: 전체화면으로 외부 웹이 보여진다
- 뒤로가기 버튼
    - `embed`프레임이나 `iframe`프레임에서는 뒤로가기 버튼이 없기때문에 셀프로 뒤로 가기버튼을 만들었다.

# Javascript

아래의 파일들을 만들어서 웹페이지가 있는 파일경로에 넣어준다

`embed_main.js` : 첫 노션페이지를 위한 js파일

```jsx

const atags = document.querySelectorAll('a');
atags.forEach( (atag) => {
    check_href = atag.getAttribute("href")
    // Show External URL in New tab
		// 외부링크는 프레임안에서 동작을 못하기때문에 parent부분에서 열어주도록한다
    if (check_href.startsWith("http") == true){
        atag.setAttribute("target", "_parent");
    }
    else{
				// 첫 노션페이지일시 뒤로가기버튼 비활성화
        sendRemoveBtnToParent('unvisible');
        // Show button
				// 다른 노션페이지 링크 클릭시
				// 뒤로가기버튼이 나타난다
        atag.addEventListener( 'click', function( e ) {
            sendShowBtnToParent( 'visible' );
        });
    }
});

// Post Message to Parent
// 뒤로가기 버튼 보여주기
function sendShowBtnToParent( msg ) {
    window.parent.postMessage( msg, '*' );
}
// 뒤로가기 버튼 가리기
function sendRemoveBtnToParent( msg ) {
    window.parent.postMessage( msg, '*' );
}
```

- - -


ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ


`embed_sub.js` : 첫 노션페이지 안에 있는 노션 페이지를 위한 javascript

![notionlist]({{site.baseurl}}/assets/images/Web/notionlist.png){: .align-center}
<figcaption align="center">노션안에 있는 노션페이지 링크들</figcaption>
```jsx

// Show GoBackPage Button
// 뒤로가기 버튼 활성화
sendShowBtnToParent( 'visible' );

const atags = document.querySelectorAll('a');
atags.forEach( (atag) => {
    check_href = atag.getAttribute("href");
    // Show External URL in New tab
		// 외부링크는 프레임안에서 동작을 못하기때문에 parent부분에서 열어주도록한다
    if (check_href.startsWith("http") == true){
        atag.setAttribute("target", "_parent");
    }
});

// 뒤로가기 버튼 보여주기
function sendShowBtnToParent( msg ) {
    window.parent.postMessage( msg, '*' );
}
```

여기서는 index.html(parent) 과 노션페이지html(child,`<embed>`)가 서로 통신하기 위해 [postMessage](https://developer.mozilla.org/ko/docs/Web/API/Window/postMessage)를 사용한다 


💡 postMessage - iframe, youtube등 프레임과 부모 프레임과 통신하는 방법이다
{: .notice--info}


ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ


# Python - 자동화

노션에서 다운로드 받은 html파일들 안에서 위에서 만든 자바스크립트를 연동시켜야한다.

첫화면에 쓰일 첫 노션페이지 html을 들어가보자

```jsx
<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>hellodev</title><style>
```

여기서 head뒤에 `<script src="embed-main.js" defer></script><link rel="stylesheet" href="notion-mainstyle.css" />` 를 넣어준다

즉,  
```jsx
<html><head><script src="embed-main.js" defer></script><link rel="stylesheet" href="notion-mainstyle.css" /><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>hellodev</title><style>
```
이렇게 만든다

- `notion-mainstyle.css` 이 파일은 개인적으로 노션페이지를 커스텀하기위해 만들었다

- 커스텀할 필요가 없으면 `<link rel="stylesheet" href="notion-mainstyle.css" />` 를 지워주면 된다.

- - -

ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ


첫페이지를 위한 html 작업은 끝났지만

노션페이지안에 있는 노션페이지를 위한 js(`embed_sub.js`)를 연동시켜야한다

![notionlist]({{site.baseurl}}/assets/images/Web/notionlist.png){: .align-center}
<figcaption align="center">네모안에 있는 페이지들에 대한 html파일을 수정해야한다</figcaption>



ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ

하지만 저런 링크들이 많으면 `html` 하나하나 수정하기가 까다롭고 시간이 너무 많이 지체된다

이를 해결하기 위해 `python`으로 자동화시스템을 만든다

## script 넣는 코드

```jsx
import numbers
import os
import re

index_num = 12  

//삽입할 텍스트
script = '<script src="../embed-sub.js" defer></script><link rel="stylesheet" href="../notion-mainstyle.css" />'

//첫번째 줄 읽기
def read_first_line(file_name):
    with open(file_name) as html_file:
            first_line = html_file.readline()
            return first_line

// 파일에서 원하는 줄에 있는 내용을 text로 바꾸기
def replace_line(file_name, line_num, text):
    lines = open(file_name, 'r').readlines()
    lines[line_num] = text
    out = open(file_name, 'w')
    out.writelines(lines)
    out.close()

// 첫번째줄에 script를 넣어준다
def insert_script_to_firstLine(file_name, script_text):
    with open(file_name, 'r') as html_file:
        first_line = list(html_file.readline())
        first_line.insert(index_num, script_text)
        completed_line = ''.join(first_line)
        replace_line(file_name, 0, completed_line)
    

```

## CSS 바꾸기

```jsx

original_text = """
a,
a.visited {
	color: inherit;
	text-decoration: underline;
}
"""
input_text = """
a,
a.visited {
	color: inherit;
	text-decoration: changed;
}
"""

def replace_paragraph(file_name, original_text, input_text):
    data = open(file_name, 'r').read()
    updated_data = re.sub(original_text, input_text, data)
    with open(file_name, 'w') as out:
        out.write(updated_data)
```

`original_text`가 있는지 확인하고 해당부분을 `input_text`로 바꾸어준다

## 종합코드

```jsx
import numbers
import os
import re

index_num = 12  

original_text = """
a,
a.visited {
	color: inherit;
	text-decoration: underline;
}
"""
input_text = """
a,
a.visited {
	color: inherit;
	text-decoration: changed;
}
"""

script = '<script src="../embed-sub.js" defer></script><link rel="stylesheet" href="../notion-mainstyle.css" />'

def insert_script_to_firstLine(file_name, script_text):
    with open(file_name, 'r') as html_file:
        first_line = list(html_file.readline())
        first_line.insert(index_num, script_text)
        completed_line = ''.join(first_line)
        replace_line(file_name, 0, completed_line)
    

def replace_line(file_name, line_num, text):
    lines = open(file_name, 'r').readlines()
    lines[line_num] = text
    out = open(file_name, 'w')
    out.writelines(lines)
    out.close()

def replace_paragraph(file_name, original_text, input_text):
    data = open(file_name, 'r').read()
    updated_data = re.sub(original_text, input_text, data)
    with open(file_name, 'w') as out:
        out.write(updated_data)
    

def read_first_line(file_name):
    with open(file_name) as html_file:
            first_line = html_file.readline()
            return first_line

for f_name in os.listdir('test'):
    if f_name.endswith('html'):
        first_line = read_first_line('./test/' + f_name)
        if script in first_line:
            print(first_line+"에는 " + script + "가 있습니다")
        else:
            insert_script_to_firstLine('./test/' + f_name, script)
        replace_paragraph('./test/' + f_name, original_text, input_text)
```

위 코드를 실행시키면 아래와 같이 바뀐걸 확인할수 있다

```jsx
<html><head><script src="../embed-sub.js" defer></script><link rel="stylesheet" href="../notion-mainstyle.css" /><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>Spring Component Scan</title><style>
```

참고자료

[[개발] window.postMessage를 이용한 iframe 통신](https://medium.com/@tamm_/%EA%B0%9C%EB%B0%9C-window-postmessage%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-iframe-%ED%86%B5%EC%8B%A0-a542b8536518)

[iframe과 메시지 전달](http://blog.302chanwoo.com/2016/08/postmessage/)