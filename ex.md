# virtualbox 를 이용한 centOS 환경설정

구글 드라이브 링크
[https://drive.google.com/drive/folders/17wjrgTvV-_1JULzMXkb4tAnAZI4_c2OP?usp=sharing](https://drive.google.com/drive/folders/17wjrgTvV-_1JULzMXkb4tAnAZI4_c2OP?usp=sharing)

virtualbox 다운로드 링크
[https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)

- virtualbox 설치 방법
    1. 설치 파일 열기
    2. [next]
    3. [next]
    4. [next]
    5. [yes]
    6. [install]
    7. [finish]
- 가상 머신 내에서 마우스 빠져나오게 하기 설정
    1. 좌측 상단 [파일] 버튼 클릭
    2. [환경 설정] 클릭
    3. [입력] 항목 클릭
    4. 호스트 키 조합 -> 좌측 ctrl + alt
- [virtual box] 네트워크
    - Nat
    하나의 네트워크에서 하나의 가상머신 네트워크 사용
    - Nat-network
    하나의 네트워크에서 여러 가상머신 네트워크 사용
    - Nat-network 설정
        1. 좌측 상단 [파일] 버튼 클릭
        2. [환경 설정] 클릭
        3. [네트워크] 항목 클릭
        4. 우측 플러스 버튼 클릭
        5. 편집
        6. DHCP 항목 체크 해제
            1. [확인] 버튼 클릭
- Nat-network
사용자가 사용하는 가상머신과 외부를 연결해줌
- host-only Network 설정
    1. 좌측 상단 [파일] 버튼 클릭
    2. [호스트 네트워크 관리자] 클릭
    3. DHCP 서버
    - 사용함 체크 해제
- host-only Network 없을 시 생성
IPv4 주소 : 192.168.56.1
IPv4 서브넷 마스크 : 255.255.255.0
- host-only Network
내부 가상머신들끼리 통신할 때 사용
- centos 설치
    1. virtual box 메인화면에서 [새로 만들기] 클릭
    2. 이름 지정
        - centos7#1
        - Red Hat (64-bit)
    3. [다음] 클릭
    4. 메모리 크기 [다음] 클릭
    5. [다음] 클릭
    6. [다음] 클릭
    7. [다음] 클릭
    8. [만들기] 클릭
- 가상머신 설정
    1. 가상머신 선택 후 [설정] 버튼 클릭
    2. [네트워크] 항목 클릭
    3. 어뎁터1
- 네트워크 어댑터 사용하기 체크
- NAT 네트워크 선택
1. 어뎁터2
- 네트워크 어댑터 사용하기 체크
- 호스트 전용 어댑터 선택

가상머신에 centos 설치

  1. 가상머신 선택 후 [설정] 버튼 클릭
  2. [저장소] 항목 클릭
  3. IDE 항목에서 [디스크(원형) 플러스] 버튼 클릭
     - IDE 항목이 없을 경우 하단에 [디스크 플러스] 버튼 클릭
     - 왼쪽에서 3번째 항목
  4. [추가] 버튼 클릭
  5. 다운로드 받은 centos 파일을 선택하여 열기
  6. [선택] 버튼 클릭
  7. 메인 화면에서 [시작] 버튼 클릭
  8. [Install Centos 7] 선택
  9. 언어 선택 후 [continue] 클릭
  10. INSTALLATION DESTINATION 항목 클릭 후
      - 디스크 항목 선택 [Done] 클릭
  11. [begin installation] 클릭
  12. Root 패스워드를 설정(사용자가 편한대로)

- 마우스 포인터 설정

  1. virtualbox 메인화면에서 [설정] 클릭
  2. [시스템] 항목 클릭
  3. 포인팅 장치를 변경
     - usb 포인터

- centos 로그인 방법

```sh
localhost login : root <- 입력
Password : 패스워드 입력
[root@localhost ~] #
```
네트워크 설정

1. 네트워크 확인 명령어

`nmcli con show`
enp0s3 ...
enp0s8 ...

2. 네트워크 설정

`nmcli con add con-name ens1 type ethernet ifname enp0s3 \`

ipv4.method manual ipv4.addresses 10.0.2.10/24 ipv4.gateway 10.0.2.1 \
ipv4.dns 8.8.8.8

`nmcli con add con-name ens2 type ethernet ifname enp0s8 \`
ipv4.method manual ipv4.addresses 192.168.56.10/24 ipv4.gateway 192.168.56.1 \
ipv4.dns 8.8.8.8

- \ 는 문장을 다음 줄로 이어 쓸 때 사용하는 특수 기호
1. 네트워크 활성화

`nmcli con up ens1`

`nmcli con up ens2`

`nmcli con show` 로 인터페이스가 보이지 않을 경우

`nmcli dev show`

- 인터페이스가 나올 경우엔 ip 설정을 그대로 진행

ip 설정 완료후 설정 확인

`nmcli con show`

> ens1, ens2 항목이 초록색으로 보여야 함

잘못 설정했을 경우(해당 설정을 제거 후 위에 설정을 다시 하면 됨)

`nmcli con del ens1`

`nmcli con del ens2`

- putty 글자 크기 설정(실행 후)
  1. [Window] - [Appearance] 클릭
  2. [Font settings] - [Change] 클릭
     - 글꼴, 크기 지정 가능

- putty 설정 저장 및 실행(session 부분으로 넘어 온 후 진행)
    1. [Host Name] - 192.168.56.10 입력
    2. [Saved Sessions] - 192.168.56.10 입력
    3. [save] 클릭
    4. [Open] 클릭
    5. 터미널 창에서 [accept] 클릭
    6. root / 비밀번호 입력

- utty 연결이 안 될 경우 확인 방법
    윈도우 상에서
    1. cmd 실행
    2. ping 192.168.56.10
    - 입력 후 반응이 있을 시엔 putty 실행 후 대기
    - 반응이 없을 경우 ip를 다시 설정해줘야 함

가상머신 상에서

`ip addr show`
  - ip 설정 확인

clear / ctrl + L 입력 시 화면 재정렬

- 실습 1.
가상머신 추가 세팅(ex. centos7#2)
enp0s3 - ens3, ip 10.0.2.11, subnet mask 255.255.255.0, gateway 10.0.2.1, dns 8.8.8.8
enp0s8 - ens4, ip 192.168.56.11, subnet mask 255.255.255.0, gateway 192.168.56.1
dns 8.8.8.8

255.255.255.0 => 11111111.11111111.11111111.00000000

정답)
enp0s3

---

`nmcli con add con-name ens3 type ethernet ifname enp0s3 ipv4.mathod manual \`

= ipv4.addresses 10.0.2.11/24 ipv4.gateway 10.0.2.1 dns 8.8.8.8
enp0s8

`nmcli con add con-name ens4 type ethernet ifname enp0s8 ipv4.mathod manual \`

= ipv4.addresses 192.168.56.11/24 ipv4.gateway 192.168.56.1 dns 8.8.8.8

- 실습 2.
명령어 쓰임새 알아보기
pwd
ls
whoami
echo
date

정답)
pwd

- 결과) /root
- 현재 작업하고 있는 디렉토리 확인

ls

- 결과) anaconda-ks.cfg
- 현재 작업하고 있는 디렉토리 내의 목록 확인

whoami

- 결과) root
- 현재 접속하고 있는 사용자명 표시

echo

- 결과) 아무것도 표시되지 않음
- echo test
- 결과) test
- 인자를 출력

date

- 현재 날짜와 시간을 표시