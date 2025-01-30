---
permalink: /Trading/Programming/conclusion
title: "5400%의 수익의 백테스팅?!"
toc: true
categories:
  - Trading💸Programming
comments: true
sidebar:
  - title: "Trading💸"
  - nav: "Trading-menu"
tags:
  - Programming
list_name:
  - Programming
  - AWS
sexy: 1
main: "Programming"
header:
  teaser: https://user-images.githubusercontent.com/46098949/171821626-2c67a8bb-4fe6-4952-bf19-665a50899b2f.png
  overlay_image: https://user-images.githubusercontent.com/46098949/171821626-2c67a8bb-4fe6-4952-bf19-665a50899b2f.png
  overlay_filter: 0.5
excerpt: 
  docker, jenkins, aws를 사용하여 CI/CD를 구축해보자 <br>최대한 비용없이 구성하였다
---



예전부터 코인에 관심이 있었고, 좋은 전략을 발견하여 해당 전략을 통해 큰 수익을 얻었다.
<img src="https://velog.velcdn.com/images/emrhssla/post/99e1217b-21c4-4bf8-be5e-c7f8b7c4a09d/image.PNG" width="20%" height="20%">




이 전략은 하이리스크 하이리턴 전략이었고, 장기간 트레이딩을 위해 로우리스크 로우리턴 전략으로 바꾸었다. 바꾼 이유는 여러가지가 있었지만, 잦은 거래때문에 수수료 비용의 문제가 있었고 하이리스크이기때문에 카피 팔로워들의 이탈문제가 있었기때문이다.
<img src="https://velog.velcdn.com/images/emrhssla/post/c4fa33c7-fadb-46b0-a6a8-0be5d85d867a/image.PNG" width="20%" height="20%">

위 이미지에서 나의 PnL과 ROI는 올랐지만.. Copy Trader PnL은 마이너스인 걸 볼수있다..

<br /><br /><br /><br />

그래서 해당 전략을 스윙스타일로 바꾸었다. 전략을 바꿀땐 무조건 백테스팅은 필수이다. 백테스팅은 트레이딩뷰 내 기능이 아닌 내가 직접 코드로 작성하여 개발하였다.


보통 구글링하거나 유튜브를 보면 백테스팅을 트레이딩뷰로 하는 경우가 대부분이다.

하지만 트레이딩뷰로 백테스팅을 하면 문제점이 있다. 바로 여러가지 상황을 디테일하게 설정할 수 없는 것이다. 

----

<br />
아래는 유명한 켈리 공식 계산기를 사용하여 수익률을 계산한 예시이다.    


1:1손익비와, 승률51%로만 되어도 수익률이 1100%에 육박한다.

![](https://velog.velcdn.com/images/emrhssla/post/3c303edf-184c-4fdf-b10e-cf568287999c/image.png)



하지만 수수료를 생각하면 수익률은 0%이다..(수수료 시장가 기준 0.05% * 2 = 0.1%이기때문에 손실률에다가 더해줌)
![](https://velog.velcdn.com/images/emrhssla/post/04dff186-bb6b-4a42-98cf-99f7beb3c5f4/image.png)

위 거래상황을 보면 10,000회로 되어있다. 일반적으로 단타나 스켈핑을 하면 1,000회 거래이상은 필수인데, 잦은 거래는 많은 거래비용(수수료)를 발생시킨다. 즉, 자기가 원한 결과와는 다른 방향으로 시드가 흘러간다.

----

이러한 이유로 직접 백테스팅을 작성하였고 엑셀로 결과를 그래프로 도출하였다.

![](https://velog.velcdn.com/images/emrhssla/post/9635848d-4267-4b15-bc76-2eeb332e9e79/image.png)

백테스팅 결과 가장 좋은 케이스가 **1000달러 -> 57354달러**가 되었다. 기준은 3년 동안 바이낸스 특정 종목에 선물 1배로 LONG, SHORT 가리지않고 거래를 했을 경우이다. 




<br /><br /><br /><br /><br /><br /><br />


가장 좋은 케이스? 전략은 한개인데 가장 좋은 케이스는 무슨 말인가? **하지만 같은 전략이어도 수많은 케이스가 존재한다. **


이렇게 엄청나게 많은 케이스가 있는 이유는 몇분봉으로 할지, 손익비는 어떻게 둘지(1:1, 1:2, 1:3..), 어떤 타입의 거래만 할지(long만 할지, short만 할지, 전부다할지),손절라인을 얼마나 여유를 둘지(휩쏘때문..), .. 등등 여러가지의 케이스의 조합들이 있기 때문이다. 아래의 조건들이 각 케이스들이다.
```javascript
const timeFrame = ['1m', '5m', '15m']; // 몇분봉
const GAP_RATE_LIST = [0.01, 0.05, 0.5, 0.8, 1.0, 2, 2.5, 3, 3.5]; // 손절가 여유 비율 
const VOL_POWER_LIST = [130, 150, 200, 250, 300, 400,500, 700] //거래량 강도
const PROFIT_RATE = [0.5, 1, 1.5, 1.8, 2, 2.1, 2.2, 2.3, 2.5, 2.6, 2.7, 3, 3.5, 4]; //손익비
const LANGE_LIST = [5, 10, 20, 50, 70, 100]; // 탐색 범위
let ORDER_WAIT_MAX = [5, 10, 99]; // 거래 기다리는 시간
const MIN_FLUCTUATION = [0.003, 0.004, 0.005, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2]; // 최소 변동률 조건
const MAX_FLUCTUATION = [0.015, 0.025, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.25]; // 최대 변동률 조건
```
모든 경우의 수를 구하면 특정 코인 하나당 18225000 * 1분의 시간이 걸린다. 하지만 실제로 이정도로 걸리진않고 멀티쓰레드를 활용하여 이거보단 훨씬 적게걸렸지만, 체감상 특정 코인 하나당 2-3주정도 소요된것같다. (맥북 줘터지느라 고생했어..)

<br /><br /><br /><br /><br /><br /><br />


자, 이제 결과를 보자. 시드가 결과론적으로만 봐서 무조건 높으면 이득일까? 
![](https://velog.velcdn.com/images/emrhssla/post/3be9cf7e-350c-433e-ae5e-e2a7ef8671f7/image.png)
주황색 케이스와 파랑색 케이스가 있다. 주황색 케이스가 2400%의 수익을 창출했고 파란색 케이스는 1500%의 수익을 창출했다. 결과로만 봤을때는 주황색 케이스가 수익이 좋지만, 해당 케이스는 2021년 11월에 피크를 찍은뒤 엄청난 하락이 있었다. 결과적으로 지속적인 우상향이어야만 좋은 케이스이기때문에 파랑색이 더 좋은 케이스라고 볼 수 있다. 
 이러한 케이스를 금융용어로 MDD라고 표현한다. peak를 찍고 난뒤 최대 하락폭을 말한다. 주황색 케이스는 33000에서 9000까지 떨어졌으므로 MDD가 70%에 가까이 육박한다. 즉 최고점에서 거래를 시작했으면 내자산의 최대낙폭은 70%가 날라간다라고 표현할 수 있다. 과연 이 때 거래자는 자신의 신념에 흔들리지않을수있을까? 대부분 내자산이 -70%날라가는 꼴을 보고 매매를 중지할 것이다.
 
 이처럼 금융에서 투자성과를 평가함에 따른 여러가지의 수치가 있다. 바이낸스에서는 아래와 같은 수치가 정의되어있다.
 ![](https://velog.velcdn.com/images/emrhssla/post/4179bade-5f3b-42bc-825e-8d5c700d9551/image.png)
[Portfolio Performance Indicators in Binance](https://www.binance.com/en/support/faq/portfolio-performance-indicators-in-binance-futures-copy-trading-54aa6d3b43bc4f6eb4a3a6e3aea40acd)를 참고하면 Sharpe Ratio와 MDD가 있는 것을 확인할 수 있다. 이 수치뿐만 아니라 여러 수치를 계산하여 엑셀에 작성하였다. 계산한 수치는 아래와 같다

**PSI(Population Stability Index)
MDD
Sharpe Ratio
Sortino Ratio
calmar Ratio
lowest Seed(역대 최저 시드)
거래횟수**
 

<br /><br /><br /><br /><br /><br /><br />


최종 결과는 아래와 같다.
![](https://velog.velcdn.com/images/emrhssla/post/1bed0d1b-d2bb-45a7-ac90-b139fa3c4560/image.png)
![](https://velog.velcdn.com/images/emrhssla/post/f745d245-b730-44a2-b9ef-0c7330e02f55/image.png)
위 코인은 최근 3년 아래 코인은 최근 1년간 거래한 케이스이다. 3년간 3800% 우상향 1년간 1700% 우상향임을 확인할 수 있다. 




검증이 완료됐으므로 자동매매 개발 + 텔레그램 알림봇까지 완료하였다. 해당 자동매매 개발 수익을 확인하기위해 과거데이터가 있는 기존 계정은 reset하고 새로운 계정으로 최근 자동매매를 시작하였다. 자동매매동안 백테스팅 코드를 블로그에 작성할 예정이다~! 혹시나 텔레그램 알림봇에 관심있는분은 @wwwchannn 으로 메세지남기소~!