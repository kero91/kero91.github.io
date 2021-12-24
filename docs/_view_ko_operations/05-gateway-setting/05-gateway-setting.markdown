---
index: 5.4
display_index: "5.4"
title: 게이트웨이 설정
---

Operato 마스터 데이터가 모두 정리되었다면 개별 게이트웨이마다 설정한다.
주요 설정 대상은 IP, MQTT, Center 정보 등이고 이 설정이 완료되면 이제 Operato 서버의 스테이지 단위와 게이트웨이 별 연동이 되고 지시기 점, 소등이 가능해진다.

#### **1) 게이트웨이 접속 준비**

게이트웨이에 접속하는 방법은 Telnet 프로그램을 통해 접속할 수 있다.

게이트웨이에 접속하기 전에 PC의 네트워크 설정을 게이트웨이 네트워크 대역과 맞춰야한다. 

공장 출하 후 기본 게이트웨이 IP는 192.168.0.249 인데 네트워크 환경이 해당 대역대에 맞다면 telent으로 바로 접속해서 설정하면 되고 그렇지 않다면 PC와 게이트웨이를 랜 선으로 직접 연결하고 PC의 네트워크 대역을 임의로 192.168.0.xxx 대로 맞춘 후에 telent으로 접속한다.

#### **2) 게이트웨이 접속**

아래 그림과 같이 telnet 접속을 한다.

```
로그인 IP : 192.168.0.249 (공장 출하 default)
Telnet 호스트 IP에 G/W default IP 설정 후 접속
정상 접속시 Localhost login : 나타나며 그림과 같이 입력한다. 비밀번호는 게이트웨이 업체에 문의
    - localhost login: root <enter>
    - Password: ***** <enter>

잘못 입력 시, 잠시 기다린 후 재시도 한다
      (백스페이스 허용 안됨)
```

![gateway-connect1][gateway-connect1]

```
Telnet 접속이 정상적으로 이루어 진후 Main menu 접속을 위해  <enter>를 입력하면 
passwd : 입력란이 표기되며 암호를 입력하면 메인 메뉴 모드에서 debug message를 출력할 것 인지를 
물어본다. 

    (default "Y") <enter>
    "Y" main menu 모드에서 debug message 출력
    "n" main menu 모드에서 debug message 미출력
    y로 출력하면 메시지가 계속 출력되어 번거로우니 "n"으로 입력한다.
```

![gateway-connect2][gateway-connect2]


#### **3) 게이트웨이 설정 정보 보기**

메인 메뉴가 출력이 된 후 [1]을 입력하고 엔터하면 아래와 같이 게이트웨이 설정 정보를 확인할 수 있다.

![gateway-connect3][gateway-connect3]

- 게이트웨이 설정 정보

```
    - SW_BUILD_DATE : 소프트웨어 Compile Time
    - SYSTIME : 서버에서 받아오는 현재 시간 정보
    - DEBUG LEVEL : 0 이면 Log 출력없음, 1이면 Log 출력, 3이면 Log 출력 & 저장
    - CHANNEL : 게이트웨이 - 지시기간 통신을 위한 채널 정보, 보통 세 개수의 숫자가 ','로 구분되어 표시되는데 각 번호의 의미는 앞에서 설명했다.
    - GW ID : 게이트웨이 ID
    - GW_ADDR : 게이트웨이에 할당된 IP (xxx.xxx.xxx.xxx)
    - GW_ROUTER : 네트워크 게이트웨이 IP (xxx.xxx.xxx.1), 네트워크 설정에 라우터 IP를 설정한다.
    - MQTT  : MQTT Server 접속정보 (MQTT 접속 IP & MQTT 접속 포트)
    - MQTT_USER : MQTT USER 정보 (미들웨어 사이트 코드:미들웨어 사용자 정보)
    - MQTT_PASS : MQTT 비밀번호
    - MPS : Operato 서버와 통신할 때 사용할 Operato 서버의 메시지 큐 이름 (Operato 서버의 application.properties에 설정된 mq.system.receive.queue.name 필드 값)
    - CENTER : Operato 서버의 현재 사이트(도메인)의 미들웨어 사이트 코드
```

#### **4) 게이트웨이 설정하기**

게이트웨이 설정 정보를 변경하려면 SETUP CONFIG MENU 항목 진입 [2]를 입력한다. 그러면 아래 그림과 같이 서브 메뉴들이 표시된다.
서브 메뉴에서 각 번호를 입력하면 번호에 해당하는 설정 작업을 진행할 수 있다. [2]는 게이트웨이 IP 주소 설정, [3]은 MQTT 설정, [4]는 MPS (서버 측 큐 이름) 설정, [5]는 CENTER 설정을 할 수 있다.

![gateway-connect4][gateway-connect4]

- 게이트웨이 IP 정보 설정하기 : 위 SETUP CONFIG MENU에서 [2]를 선택하여 게이트웨이 IP 주소 설정을 해보기로 한다.

```
GW_ADDR -> 게이트웨이 IP ex) 192.168.1.100
GW_ROUTER -> 네트워크 대역의 라우터 정보 ex) 192.168.1.1
SUNNET_MASK -> 네트워크 대역의 서브넷 마스크 정보 ex) 255.255.255.0
```

- MQTT 접속 정보 설정하기 : 위 SETUP CONFIG MENU에서 [3]을 선택하여 MQTT 접속 정보를 설정한다.

```
MQTT : MQTT 접속 IP:MQTT 접속 포트 형식으로 설정 ex) 192.168.1.100:1883
MQTT_USER : MQTT 접속을 위한 사용자 정보
MQTT_PASS : MQTT 접속을 위한 사용자 비밀번호
```

MQTT 포트 정보는 아래와 같이 RabbitMQ 관리 페이지에 접속하여 확인할 수 있다.

![mqtt-port][mqtt-port]

- Operato 서버 큐 정보 설정하기 : 위 SETUP CONFIG MENU에서 [4]를 선택하여 Operato 서버 큐 이름을 설정한다.

```
MPS : 큐 이름은 Operato 매니저 화면에서 설정한 스테이지 이름으로 한다. ex) A1-DPS
```

- CENTER 설정하기 : 위 SETUP CONFIG MENU에서 [5]를 선택하여 센터를 설정한다.

```
CENTER : 센터는 위 MPS 명/GW/mqbase 형식으로 한다. ex) A1-DPS/GW/mqbase
```

입력을 완료했으면 <ESC>를 입력하여 메인 메뉴로 돌아와서 다시 한 번 설정값을 확인한다.

![gateway-connect6][gateway-connect6]

설정 완료 후 VIEW CONFIG 메뉴 [1]에서 설정값을 다시 확인 후 설정값을 캡쳐하여 GW-ID별로 이미지로 저장하고 이 내용을 게이트웨이에 스티커등으로 붙여서 관리한다.
(설정한 IP를 잃어버린 경우 Telnet접속이 불가능하며 장비의 debug port (RS-232 or Mini USB)를 이용하여 접속해야 한다.


#### **5) 게이트웨이 설정 정보 적용 및 리부팅**

설정 사항 최종 확인 후 메인 메뉴에서 [X] (Exit Application)를 입력하면 텔넷을 빠져나오면서 게이트웨이가 다시 리부팅을 시도한다.

게이트웨이가 다시 부팅이 되어 설정한 MQTT 정보로 정상적으로 접속이 되었는지를 확인하기 위해서 RabbitMQ 관리 페이지에 로그인한다.

게이트웨이가 정상적으로 MQTT에 접속이 되었다면 RabbitMQ 관리 페이지의 Connections 탭에 추가된 커넥션이 표시되고

![mqtt-connection][mqtt-connection]

Queues 탭에 추가된 게이트웨이 큐가 표시되는 것을 확인할 수 있다.

![mqtt-gateway-queue][mqtt-gateway-queue]

이렇게 메시지 미들웨어와 정상적으로 통신이 되어 Operato 서버와 메시지를 주고 받을 수 있게 되면 Operato 서버는 게이트웨이 의 부트 요청을 받아 게이트웨이 소속 지시기 리스트 정보를 내려주어 게이트웨이 - Operato 서버간 통신이 가능한 상태로 변경된다.


[gateway-connect1]: {{site.baseurl}}/assets/install/gateway-setting/gateway-connect1.png
{: width="600px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[gateway-connect2]: {{site.baseurl}}/assets/install/gateway-setting/gateway-connect2.png
{: width="600px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[gateway-connect3]: {{site.baseurl}}/assets/install/gateway-setting/gateway-connect3.png
{: width="600px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[gateway-connect4]: {{site.baseurl}}/assets/install/gateway-setting/gateway-connect4.png
{: width="600px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[gateway-connect5]: {{site.baseurl}}/assets/install/gateway-setting/gateway-connect5.png
{: width="600px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[gateway-connect6]: {{site.baseurl}}/assets/install/gateway-setting/gateway-connect6.png
{: width="600px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[mqtt-port]: {{site.baseurl}}/assets/install/gateway-setting/mqtt-port.png
{: width="400px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[mqtt-connection]: {{site.baseurl}}/assets/install/gateway-setting/mqtt-connection.png
{: width="600px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[mqtt-gateway-queue]: {{site.baseurl}}/assets/install/gateway-setting/mqtt-gateway-queue.png
{: width="600px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}