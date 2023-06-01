---
permalink: /Infra/Linux/Commandlines
title: "리눅스 명령어"
toc: true
categories:
  - Infra🐦Linux
comments: true
sidebar:
  - title: "Infra🐦"
  - nav: "Infra-menu"
tags:
  - Linux
sexy: 1
main: "Linux"
header:
  teaser: https://user-images.githubusercontent.com/46098949/175057746-c5cfff6b-7aab-49b2-9365-893b89ab48b9.png
  overlay_image: https://user-images.githubusercontent.com/46098949/175057746-c5cfff6b-7aab-49b2-9365-893b89ab48b9.png
  overlay_filter: 0.5
excerpt: 리눅스의 다양한 명령어들
---

# 1. shell

- 텍스트 기반의 인터페이스
- 프로그램

## shell의 종류

- sh : 초기의 쉘(born shell)
- bash : sh의 업그레이드 버전(가장 많이 사용)
- csh
- ksh
- zsh : 개발자, 운영자 입장에서 사용하기 용이

# 2. 경로 관련

![절대 경로, 상대 경로.png](https://user-images.githubusercontent.com/46098949/175057746-c5cfff6b-7aab-49b2-9365-893b89ab48b9.png)

## ㄱ. 상대 경로  
### `.` (점 하나)

- 현재 디렉토리를 의미

### `..` (점 두개)

- 상위 디렉토리를 의미

# 3. 파일 확인 명령어

## `cat` 
파일 내용 전체 확인

- ex) `# cat anaconda-ks.cfg`

## `head` 
파일의 상단부를 확인

- 옵션 미사용시 10줄 출력
- ex) `# head anaconda-ks.cfg`
- ex) `# head -n 5 anaconda-ks.cfg`
- n 옵션을 사용하여 원하는 줄 수 만큼 출력

## `tail` 
파일의 하단부를 확인

- 옵션 미사용시 10줄 출력
- ex) `# tail anaconda-ks.cfg`
- ex) `# tail -n 5 anaconda-ks.cfg`
- n 옵션을 사용하여 원하는 줄 수 만큼 출력

## `more` 

파일의 내용을 한 페이지씩 확인

- 스페이바로 이동 가능(화살표 방향키 사용 불가)
- 내용 전체를 보고 난 후 명령줄로 복귀
- ex) `# more anaconda-ks.cfg`

## `less`

파일의 내용을 한 페이지씩 확인

- 스페이바로 이동 가능
- 화살표 방향키 사용 가능
- 내용 전체를 보고 난 후 `q`로 빠져나와야 함
- ex) `# less anaconda-ks.cfg`

### `grep`
파일 내용에서 문자열 검색

- | (파이프) 를 같이 사용
- ex) `# cat anaconda-ks.cfg | grep CDROM`

# 4. 파일 관리 명령어

![image](https://user-images.githubusercontent.com/46098949/175063194-ac970267-7b7c-4c16-bb69-46c731583b58.png)

## cp, mv, rm 명령어 사용시 메시지를 출력하도록 설정된 파일

- `.bashrc` 에 설정되어 있음

## 빈 파일 생성

- ex) `# touch fileA`
- ex) `# touch fileB fileC`
- 빈 파일 여러 개 생성 가능
- 만들어진 파일은 `ls` 명령어로 확인 가능

## 빈 디렉토리 생성

- ex) `# mkdir dirA`
- ex) `# mkdir dirB dirC`
- 빈 디렉토리 여러 개 생성 가능
- 만들어진 디렉토리는 ls 명령어로 확인 가능

## 파일 이동

- ex) `# mv fileA dirA`
- 파일 fileA를 디렉토리 dirA 안으로 이동
- ex) `# mv fileE file2`
- 파일 fileE를 file2로 이름 변경

## 디렉토리 이동

- ex) `# mv dirB dirA`
- 디렉토리 dirB를 디렉토리 dirA 안으로 이동
- ex) `# mv dirE dir2`
- 디렉토리 dirE를 dir2로 이름 변경
- 변경할 디렉토리명은 해당 위치에 똑같은 이름이 없어야 함

## 파일 복사

- ex) `# cp fileB dirA`
- 파일 fileB를 디렉토리 dirA 안으로 복사
- ex) `# cp fileB dirC/file1`
- 파일 fileB를 디렉토리 dirC 안에 file1 이름으로 복사

## 디렉토리 복사

- ex) `# cp -r dirC dirD`
- 디렉토리 dirC를 디렉토리 dirD 안으로 복사
- ex) `# cp -r dirC dirD/dirF`
- 디렉토리 dirC를 디렉토리 dirD 안에 dirF 이름으로 복사

## 파일 삭제

- ex) `# rm fileB`
- fileB 삭제 (삭제 전 질문)
- ex) `# rm -f fileC`
- fileC 강제로 삭제 (삭제 전 질문 X)

## 디렉토리 삭제

- ex) `# rm -r dirA`
- dirA 삭제 (내부 파일 삭제 질문)
- ex) `# rm -rf dirD`
- dirD 강제로 삭제 (내부 파일 삭제 질문 X)

`rmdir` 은 내부파일이 없을 경우 삭제 가능

# 5. Link

![소프트링크, 하드링크.png](https://user-images.githubusercontent.com/46098949/175057935-b2ad81d6-21da-42fa-9c2f-7fc552ee77b7.png)

## 하드링크

- inode 테이블과의 연결고리를 만들어 주는 것
- `ln` 명령어를 사용해서 생성
- 다른 소유자의 파일을 참조하기 위해 로그인 등의 과정을
거치지 않고 하드링크를 이용하여 참조 가능
- 원본 파일 삭제 시 링크 수 감소

## 소프트링크

- 파일 이름과의 연결고리를 만들어주는 것
- 원본 파일의 이름을 거쳐 접근
- `ln -s` 명령어를 사용하여 생성
- 명령어 사용 목적으로 많이 생성
- 경로가 복잡한 디렉토리에 쉽게 접근하기 위해 사용

## 실습

1. 실습을 위해 모든 파일 제거 : `rm -rf *`
2. 링크 파일 생성을 위한 기본 파일 생성 : `echo 1234 > fileA`
3. 파일 내용 확인 : `cat fileA`
- 결과) `1234`
1. 소프트링크 파일 생성 : `ln -s fileA soft_fileA`
2. 소프트링크 참조 정보 확인 : `ls -l`
- 결과) `lrwxrwxrwx. 1 root root 5 Jan 11 01:11 soft_fileA -> fileA`
1. 하드링크 파일 생성 : `ln fileA hard_fileA`
2. 하드링크 참조 정보 확인 : `ls -l`
- 결과) `-rw-r--r--. 2 root root 5 Jan 11 01:09 hard_fileA`
1. 원본 파일 삭제 : `rm -f fileA`
2. 파일 리스트 확인 : `ls -l`

```sh
rw-r--r--. 1 root root 5 Jan 11 01:09 hard_fileA
lrwxrwxrwx. 1 root root 5 Jan 11 01:11 soft_fileA(빨간색) -> fileA(빨간색)
```

- 하드 링크 파일의 숫자가 2->1 감소
- 소프트링크 파일은 사용 불가
1. fileA 파일 재생성 : `touch fileA` 
2. 파일 리스트 확인 : `ls -l`

```sh
rw-r--r--. 1 root root 0 Jan 11 01:23 fileA
-rw-r--r--. 1 root root 5 Jan 11 01:09 hard_fileA
lrwxrwxrwx. 1 root root 5 Jan 11 01:11 soft_fileA -> fileA
```

- 전에 생성했던 fileA 와는 다른 fileA가 생성됨
- 소프트링크 파일은 새로 생성한 fileA를 참조함
- 하드링크는 기존 fileA가 참조하던 data를 참조

# 6. 검색

## ㄱ. `locate`

- 명령어 형식 : `locate [파일명]`
- 목록 데이터베이스를 주기적으로 갱신해줘야 함
- 이름을 기반으로 검색

locate 사용을 위한 데이터베이스 목록 패키지 다운로드 : `sudo yum -y install mlocate`

locate 데이터베이스 업데이트 : `updatedb`

locate 명령어 사용 : `locate fileA`

결과)

```sh
/root/fileA
/root/hard_fileA
/root/soft_fileA
```

## ㄴ. `find`

- 명령어 형식 : `find [경로 조건]`
- 경로를 기준으로 하위 검색
- 직접 접근하여 찾는 방식
- 여러 가지 조건으로 검색 가능
- 검색과 동시에 추가 작업 가능

최상위 디렉토리 하단에 위치한 이름에 `file` 이라는 단어가 들어가는 모든 파일을 검색

`find / -name "file"`

- `locate file` 과 같은 명령어

최상위 디렉토리 하단에 위치한 이름에 `file` 이라는 단어가 들어가는 모든 파일 중 30k 이상 50k 이하 파일을 검색

`find / -name "*file*" -size +30k -size -50k`

최상위 디렉토리 하단에 위치한 이름에 `file` 이라는 단어가 들어가는 모든 파일 중 30k 이상 50k 이하 파일을 검색하여 dirA에 복사

```sh
mkdir dirA
find / -name "*file*" -size +30k -size -50k -exec cp {} dirA \;
```
- `exec` 옵션을 사용하여 복사 가능
- `{}` 중괄호에 찾은 결과가 들어감
- `exec` 옵션을 사용하게 되면 반드시 맨 뒤에 `\;`

최상위 디렉토리 하단에 위치한 이름에 file 이라는 단어가 들어가는 모든 파일 중 30k 이상 50k 이하 파일을 검색하여 파일 목록을 `fileB`에 저장

`find / -name "*file*" -size +30k -size -50k > fileB`

결과)

```sh
/etc/selinux/targeted/contexts/files/file_contexts.homedirs.bin
/root/dirA/file_contexts.homedirs.bin
/root/dirA/libuser_files.so
/root/dirA/zipfile.pyo
/root/dirA/zipfile.pyc
/usr/lib64/libuser/libuser_files.so
/usr/lib64/python2.7/zipfile.pyo
/usr/lib64/python2.7/zipfile.pyc
```

# 7. `file`

- `file [파일명]`
- 해당 파일이 무슨 파일인지 확인할 때 사용하는 명령어

`file fileA`

결과) `fileA: empty`

`file fileB`

결과) `fileB: ASCII text`

`file dirA`

결과) `dirA: directory`

`file soft_fileA`

결과) `soft_fileA: symbolic link to `fileA'`