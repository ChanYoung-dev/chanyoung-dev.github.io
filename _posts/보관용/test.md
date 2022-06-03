# 0. 목표
<img width="636" alt="image" src="https://user-images.githubusercontent.com/46098949/171821626-2c67a8bb-4fe6-4952-bf19-665a50899b2f.png">

- IntellJ나 VS Code 등으로 작업 후 Github에 커밋하고 Push만 하여도 별다른 작업없이 배포를 가능하게 만든다
- `Docker`와 `Nginx` `Jenkins`를 이용하여 여러개의 Spring 서버를 배포한다  
- 현재 4개의 Spring 서버가 사용되고 있지만, 그 중 하나의 서버(Review)만 지속적으로 개발할것이기 때문에 `Jenkins`를 통해 Review서버만 업데이트한다

# 1. Jenkins
Jenkins 설치
```
> docker pull jenkins/jenkins:lts
> docker run --name jenkins -d -p 9000:8080 jenkins/jenkins:lts
```

![image](https://user-images.githubusercontent.com/46098949/171823878-e81344e9-ea4a-4b08-bf92-f4d1c0d34215.png)
```
> docker exec -it jenkins cat /var/lib/jenkins/secrets/initalAdminPassword //복사하고 붙여넣기
```

새로운 아이템 -> free style 

## 1.1 구성
### 1.1.1 소스 코드 관리
![image](https://user-images.githubusercontent.com/46098949/171824967-d8936e5d-8de1-4c35-8862-08245f077563.png)

Credentials -> Add 선택
- Kind: Username with password
- Scope: Global
- Username: Git Id
- Password: Git password
- ID: Credentinals의 ID(아무거나 써도 가능)

만약 위와 같이 Add했는데도 `none`인 경우  

- `Jenkins 관리` -> `Manage Credentials` 접속

![image](https://user-images.githubusercontent.com/46098949/171826291-3b135084-8afa-41b7-9804-dac5d6086eb0.png)

- `Add domain`
- 도메인 이름은 아무렇게나 적고 생성한뒤 해당 도메인에서 `Add credentials` 클릭 후 설정

### 1.1.2 빌드 유발
`GiHub hook trigger for GITScm polling` 체크

### 1.1.3 Build
![image](https://user-images.githubusercontent.com/46098949/171828229-89066470-fb8f-4f3c-af5d-de3e99d667ac.png)

- github 소스코드에 Wrapper까지 같이 push되어있는 상태면 `Use Gradle Wrapper`를 선택한다
- 이는 스프링 프로젝트 내 파일을 이용하여 `Gradle`을 실행하는 것이다
<img width="411" alt="image" src="https://user-images.githubusercontent.com/46098949/171827960-21dd27ac-a087-4f87-afa8-7a283e5559b2.png">

**clean build -x test**
- `-x test`: test를 포함하지않고 빌드
- `--debug`: 만약 빌드가 안될 경우 `--debug`를 추가하여 무엇이 문제인지 확인

여기까지 진행만 해놓고 빌드가 정상적으로 되는지 확인해본다

