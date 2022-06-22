---
permalink: /Cloud/Linux/AdvancedCommandlines
title: "리눅스 명령어2"
toc: true
categories:
  - Cloud🐦Linux
comments: true
sidebar:
  - title: "Cloud🐦"
  - nav: "Cloud-menu"
tags:
  - Linux
sexy: 1
main: "Linux"
header:
  teaser: https://user-images.githubusercontent.com/46098949/175057746-c5cfff6b-7aab-49b2-9365-893b89ab48b9.png
  overlay_image: https://user-images.githubusercontent.com/46098949/175057746-c5cfff6b-7aab-49b2-9365-893b89ab48b9.png
  overlay_filter: 0.5
excerpt: 리눅스의 다양한 명령어들2
---


# 1. vim

설치 : `yum -y install vim`

vim 편집기 열기 : `vim [파일명]` `vim fileA`

## 수정모드

- vim 편집기 내에서 `i` 버튼 누르기
- 입력 후 `esc` 키를 눌러 command 모드 전환

## command 모드에서 저장 및 종료하기

콜론(`:`) 입력
- `w` 입력 시 저장

- `q` 입력 시 종료

- `!` 입력은 강제의 의미를 가지고 있음

- 팁1) command 모드에서 번호를 입력하면 줄 변경 가능

- 팁2) command 모드에서 `dd` 입력 시 커서가 있는 라인 삭제

- 팁3) command 모드에서 `u` 버튼을 누를 시 이전 작업 취소

vim 편집기는 편집하는 용도로도 사용할 수 있지만 내용을 확인하는 경우에도 사용 가능

# 2. 프로세스 입출력

- 프로세스란?
프로그램이 실행되어 메모리에 적재된 상태

`rm test > /dev/null 2>fileB` : 에러가 fileB에 저장

`rm test > /dev/null 2>/dev/null` : 에러가 출력되지 않음

# 3. tee

`ls -l > saved_output | less`

- 리다이렉션에 대한 출력값이 없기 때문에 `less` 명령어가 받을 입력이 없음

`ls -l | tee saved_output | less`

- `ls -l` 명령어에 대한 출력값을 `tee` 명령어가 받아 `saved_output`파일에 저장하고 `less` 명령어가 출력값을 받아 결과를 출력

# 4. tar

- `tar` 사용 형식  
`tar [옵션] [생성할 파일명] [묶을 파일명]`
- tar 옵션  
![image](https://user-images.githubusercontent.com/46098949/175063360-07be8c5f-5db8-4036-a09f-dd0d943f80c5.png)
    - c : 아카이브 파일을 만드는 옵션
    - x : 원본 파일을 추출하는 옵션
    - t : 묶여있는 파일들을 확인하는 옵션
    - f : 파일의 이름을 지정하는 옵션(필수)
    - z : gzip 방식의 파일을 묶거나 추출할 때 사용하는 옵션
    - j : bzip2 방식의 파일을 묶거나 추출할 때 사용하는 옵션
    - J : xz 방식의 파일을 묶거나 추출할 때 사용하는 옵션
    - v : 파일이 묶이거나 풀리는 과정을 보여주는 옵션

## tar 명령어 실습

- `tar cf file1 fileA fileB fileC`
    
    fileA fileB fileC 를 묶어서 file1 아카이브 파일 생성
    
옵션 사용시 대시(-)를 사용하게 되면 옵션의 순서를 맞춰줘야 함  
대시 미사용 시 옵션의 순서는 상관 X
{: .notice--success}
- `file file1`
    
    결과) file1: POSIX tar archive (GNU)
    
    file1의 파일 종류 확인
    
- `tar tf file1`
    
    file1의 내용물 확인
    
    팁) 아카이브 파일 생성시 .tar 확장자를 붙여준 상태로 만들어주는 것을 권장
    
    `tar cf file2.tar fileA fileB fileC`
    
- `tar xf file2.tar`
    
    `file2.tar` 파일에서 파일 추출
    
- `tar cvf file3.tar fileA fileB fileC`
    
    압축 과정을 확인하고 싶을 경우 `v` 옵션 사용
    
- `tar cvfz file4.tar.gz fileA fileB fileC`
    
    fileA fileB fileC를 아카이브 파일로 만든 후 gzip 으로 압축
    
- `tar xvfz file4.tar.gz`
    
    `file4.tar.gz` 압축 해제 후 파일 추출
    
- `tar cf etc.tar /etc`
    
    `/etc` 디렉토리 하위에 존재하는 디렉토리와 파일로 아카이브 파일 생성
    
- `tar cf etc.tar /etc`
    
    `tar: Removing leading / from member names`
    
    - 파일이 무조건 덮어 써지므로 최상위 디렉토리 밑에 존재하는 디렉토리로 아카이브 파일 생성시에 최상위 디렉토리(`/`) 기호는 제거됨(보안상)
    - `root` 사용자는 최고의 권한을 갖는 사용자이기 때문에 아카이브 파일을 최상위 디렉토리에 옮겨서 추출 가능(일반 사용자는 불가)

# 5. 프로세스

- sleep 명령어를 포어그라운드에서 실행
    
    `sleep 1000`
    
- sleep 명령어를 백그라운드에서 실행
    
    `sleep 1000 &`
    
- 백그라운드에서 진행중인 작업 확인
    
    `jobs`
    
- 백그라운드에서 진행중인 작업을 포어그라운드에 옮겨서 작업
    
    `fg %1`
    
    - `%[숫자]`에서 숫자는 해당 작업의 순서를 의미
- 포어그라운드에서 진행중인 작업을 백그라운드에 옮겨서 작업
    
    `ctrl` + `z` 로 작업을 일시중지
    
    `bg %1`
    
- 프로세스 확인 명령어
`ps`

```sh
PID TTY          TIME CMD
 1386 pts/0    00:00:00 bash
 7765 pts/0    00:00:00 sleep
 7842 pts/0    00:00:00 ps
```

프로세스의 실행하는 순간의 현재 상태를 찍어서 보여주는 명령어

- `top`
    
    동작중인 프로세스들의 상태를 실시간으로 확인 가능 (종료 : `q`)
    
- `uptime`
    
    ```sh
    [root@servera ~]# uptime
     23:46:30 up 11:08,  2 users,  load average: 0.00, 0.01, 0.05
    ```
    
    부하 평균을 출력하는 명령어
    
    - `load average` : 각각 1분, 5분, 15분에 대한 부하 표시
    - `load average`  를 cpu갯수로 나눈 값으로 부하 정도 확인 가능
    - cpu 갯수는 `lscpu`로 확인 가능
    - 나눠서 나온 값이 1 이하면 만족스로운 리소스 사용량
    - 1 이상이면 포화상태
    - `w`
        
        부하 모니터링 가능
        
        ```bash
        [root@servera ~]# uptime
         23:44:38 up 11:07,  2 users,  load average: 0.00, 0.01, 0.05
        ```
        
- `PID`
    
    프로세스 식별자
    
    프로세스가 동작할 때 부여되는 번호
    
- `kill`
    - `kill -9 [PID]`
        
        4180번 프로세스 강제 종료
        
- `pgrep`
    - `pgrep sl`
        
        프로세스 내용에 `sl` 이 포함된 작업을 번호로 출력
        
    - `pgrep -l sl`
        
        프로세스 내용에 `sl` 이 포함된 작업을 리스트로 출력
        
    - `pgrep -l -u root sl`
        
        root 사용자가 실행시킨 프로세스 중 내용에 `sl` 이 포함된 작업을 리스트로 출력
        
- `pkill`
    
    `pkill sleep`
    
    작업 내용이 sleep인 프로세스 종료
    
    `killall`을 사용하는 것보다 `pgrep` 명령어로 프로세스를 확인 후 `pkill` 명령어로 종료하는 것을 권장
    
- `pstree`
    
    프로세스를 트리구조로 확인 가능
    

# 6. 데몬 프로세스

멀티태스킹 운영 체제에서 사용자가 직접적으로 제어하지 않고, 백그라운드에 돌면서 여러 작업을 하는 프로세스

대부분 데몬 프로세스의 단어는 d로 끝남

데몬 프로세스는 유닛 단위로 실행

- `systemd`
    
    일반적인 서비스 시작 및 서비스 관리를 포함하여 Linux 시작을 관리
    
    1번 pid 할당
    
- `systemctl`
    
    유닛을 확인
    
- `systemctl list-units`
    
    유닛 리스트 확인
    
- `systemctl --type service`
    
    데몬의 서비스 유닛을 확인