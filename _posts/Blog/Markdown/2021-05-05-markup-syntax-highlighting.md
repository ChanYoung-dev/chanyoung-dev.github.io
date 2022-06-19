---
permalink: /Blog/Markdown/codefence/
title: "Markdown에서의 코드 박스 꾸미기"
toc: true
categories:
  - Blog🐨Markdown
comments: true
sidebar:
  - title: "Blog🐨"
  - nav: "Blog-menu"
excerpt: >
  Code block Highlight은 두가지 종류가 있다.
tags:
  - Markdown
sexy: 1
main: "Markdown"
header:
  teaser: https://user-images.githubusercontent.com/46098949/174485243-12cc0944-71a2-407c-a865-4a3da55d28f8.png
  overlay_image: https://user-images.githubusercontent.com/46098949/174485243-12cc0944-71a2-407c-a865-4a3da55d28f8.png
  overlay_filter: 0.5
list_name:
  - Markdown
  - Markup
  - HTML
---

Code block Highlight은 두가지 종류가 있다.

## 1 .GFM Code Blocks

Github에서 만든 코드 블락이다.  
markdown에 다음과 같이 입력한다. 더 자세한 내용은 [fenced code blocks↗️](https://help.github.com/articles/creating-and-highlighting-code-blocks/) 참조.
<pre>
  ```javascript
  // 'gulp html' -- does nothing
  // 'gulp html --prod' -- minifies and gzips HTML files for production
  gulp.task('html', () => {
    return gulp.src(paths.siteFolderName + paths.htmlPattern)
      .pipe(when(argv.prod, htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: false,
        removeAttributeQuotes: false,
        removeRedundantAttributes: false,
        minifyJS: true,
        minifyCSS: true
      })))
      .pipe(when(argv.prod, size({title: 'optimized HTML'})))
      .pipe(when(argv.prod, gulp.dest(paths.siteFolderName)))
      .pipe(when(argv.prod, gzip({append: true})))
      .pipe(when(argv.prod, size({
        title: 'gzipped HTML',
        gzip: true
      })))
      .pipe(when(argv.prod, gulp.dest(paths.siteFolderName)))
  });
  ```
</pre>{: .notice--success}

- #### 적용 후
```javascript
// 'gulp html' -- does nothing
// 'gulp html --prod' -- minifies and gzips HTML files for production
gulp.task('html', () => {
  return gulp.src(paths.siteFolderName + paths.htmlPattern)
    .pipe(when(argv.prod, htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: false,
      removeAttributeQuotes: false,
      removeRedundantAttributes: false,
      minifyJS: true,
      minifyCSS: true
    })))
    .pipe(when(argv.prod, size({title: 'optimized HTML'})))
    .pipe(when(argv.prod, gulp.dest(paths.siteFolderName)))
    .pipe(when(argv.prod, gzip({append: true})))
    .pipe(when(argv.prod, size({
      title: 'gzipped HTML',
      gzip: true
    })))
    .pipe(when(argv.prod, gulp.dest(paths.siteFolderName)))
});
```


### 2. Jekyll Highlight Tag

Jekyll에서도 Highlight Tag를 제공한다.  
Jekyll태그의 예시는 [Jekyll tag↗️](https://jekyllrb.com/docs/templates/#code-snippet-highlighting)를 참조

**linenos**사용할 시 Line Number도 같이 보여준다.

- #### 적용 후

{% highlight javascript linenos %}
// 'gulp html' -- does nothing
// 'gulp html --prod' -- minifies and gzips HTML files for production
gulp.task('html', () => {
  return gulp.src(paths.siteFolderName + paths.htmlPattern)
    .pipe(when(argv.prod, htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: false,
      removeAttributeQuotes: false,
      removeRedundantAttributes: false,
      minifyJS: true,
      minifyCSS: true
    })))
    .pipe(when(argv.prod, size({title: 'optimized HTML'})))
    .pipe(when(argv.prod, gulp.dest(paths.siteFolderName)))
    .pipe(when(argv.prod, gzip({append: true})))
    .pipe(when(argv.prod, size({
      title: 'gzipped HTML',
      gzip: true
    })))
    .pipe(when(argv.prod, gulp.dest(paths.siteFolderName)))
});
{% endhighlight %}

### Github Gist

gist를 통해 embed도 가능하다. 
```
<script src="gist 주소"></script>
```

- #### 적용 후

<script src="https://gist.github.com/mmistakes/77c68fbb07731a456805a7b473f47841.js"></script>
