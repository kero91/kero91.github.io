---
index: 2.3
display_index: "2.3"
title: RabbitMQ 설치
---

#### **1) 설치 파일 다운로드**

<a href="https://packages.erlang-solutions.com/erlang/erlang/esl-erlang/FLAVOUR_1_general/esl-erlang_22.0~windows_amd64.exe">Erlang</a> / <a href="https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.7.17/rabbitmq-server-windows-3.7.17.zip">RabbitMQ</a>

Erlang 설치 파일과 RabbitMQ zip 파일을 다운로드한다.
Erlang은 RabbitMQ를 구성하는 프로그램 언어이고, Erlang이 설치 되어 있어야 RabbitMQ가 실행된다.

Operato 서버는 현재 RabbitMQ 3.7.X 버전에서 안정적으로 동작하고 3.8.X 버전 이상은 테스트가 안 된 상태이니 반드시 3.7.X 버전으로 설치해야한다.
Erlang과 RabbitMQ 반드시 위 링크에서 다운로드받아서 설치해야한다.

#### **2) Erlang 설치**

다운로드받은 Erlang 설치 파일을 실행하여 원하는 위치에 설치한다.  
설치 후 윈도우 환경 변수에 ERLANG_HOME을 등록한다.

![erlang-path]

#### **3) RabbitMQ 설치**

![rabbitmq-unzip]

다운받은 zip 파일을 설치를 원하는 디렉토리에 압축을 해제한다.  
압축을 해제 하면 설치가 완료된 것이다.

#### **4) RabbitMQ 설정**

윈도우의 command 창을 열어, RabbitMQ가 설치된 하위 디렉토리의 /sbin/rabbitmq-server.bat 파일을 실행한다.

![rabbitmq-run]

RabbitMQ에서 사용하는 Plug-in들을 활성화시킨다.
별도의 command 창에서 plug-in enable 명령을 실행한다.

```
# rabbitmq-plugins.bat #
rabbitmq-plugins enable rabbitmq_management
rabbitmq-plugins enable rabbitmq_mqtt
rabbitmq-plugins enable rabbitmq_web_mqtt

```

rabbitmq_management : RabbitMQ 관리 페이지  
rabbitmq_mqtt : MQTT 사용 플러그인 (게이트 웨이 통신)  
rabbitmq_web_mqtt : WEB_MQTT 사용 플러그인 (PDA/ TABLET)

위 3가지 Plug-in 을 Enable 한 후 rabbitmq-server 를 강제 종료한다.
RabbitMQ가 한번 실행 된 후 아래 이미지 처럼 RabbitMQ를 설정 할 수 있는 경로가 생성된다.

![rabbitmq-conf]

C 드라이브의 사용자 AppData/Roaming/RabbitMQ 디렉토리가 생성된 것을 확인할 수 있다. (혹시 파일 탐색기에서 보이지 않으면 해당 폴더가 안 보이게 설정되어 있을 수 있으니 경로를 탐색기에 직접 입력하는 등의 다른 방법으로 확인해야 한다.)
이 디렉토리에 RabbitMQ 관련 설정 파일 두 개를 새로 만든다. (rabbitmq.conf, rabbitmq-env-conf.bat)

```
# rabbitmq.conf #

# RabbitMQ 관리 페이지 서비스 포트 설정으로 Operato 서버의 application.properties 아래 설정과 맵핑된다.
# mq.broker.api.port=15672
management.listener.port = 15672

# AMQP 서비스 포트 설정으로 Operato 서버의 application.properties 아래 설정과 맵핑된다.
# mq.broker.port=5673
listeners.tcp.default = 5673

tcp_listen_options.backlog = 1024
tcp_listen_options.nodelay = true

# MQTT 서비스 포트 설정 이다.
# 게이트웨이에서 접속할때 설정된 포트로 접속을 한다.
mqtt.listeners.tcp.default = 1883

# MQTT 에서 사용할 라우팅 모델 설정으로 Operato 서버의 application.properties 아래 설정과 맵핑된다.
# mq.broker.exchange.default=amq.direct
mqtt.exchange = amq.direct

mqtt.prefetch = 128
mqtt.tcp_listen_options.backlog = 1024
mqtt.tcp_listen_options.nodelay = true

# WEB MQTT 서비스 포트 설정 이다.
# 모바일 기기 에서 사용할 포트로 Operato 관리자 화면 > 설정 > 설정 화면의 mq.broker.address, mq.broker.port 값과 맵핑된다.
web_mqtt.tcp.port = 15675

log.file.level = error
```

```
# rabbitmq-env-conf.bat

# 윈도우 서비스에 올라갈 서비스 명 입력
set SERVICENAME=RabbitMQ
# 노드명 규칙 : operato-{IPAddress}-{ManagerPORT}
set NODENAME=operato-127_0_0_1-15672
```

SERVICENAME은 윈도우 서비스로 등록될 이름을, NODENAME은 RabbitMQ의 노드 명을 말한다.
NODENAME은 {노드명}-{IPAddress}-{ManagerPORT}로 구성한다.
RabbitMQ 노드 이름에 콤마는 들어가서는 안 되므로 언더바로 대체해야 한다. 추후 Framework에서 노드명을 RabbitMQ API로 조회하여 노드 이름에서 IPAddress 및 서비스 포트를 추출하기 위한 용도로 사용하므로 반드시 이 규칙을 지켜야 한다.

#### **5) RabbitMQ 서비스 등록**

RabbitMQ를 실행하는데 명령 프롬프트를 사용하면 불편하니 윈도우 서비스로 등록해보자.
윈도우 서비스로 등록하려면 일단 앞 4)에서 명령 프롬프트로 실행했던 것을 ctrl+c를 눌러서 중지시킨다.
서비스를 등록할수 있는 권한이 필요하므로 관리자 권한으로 명령 프롬프트를 실행한다. 명령 프롬프트에서 다시 RabbitMQ가 설치된 디렉토리로 이동한다.

/sbin/rabbitmq-service.bat install 명령어를 실행해 위 rabbitmq-env-conf.bat 파일에 설정된 SERVICENAME 값(RabbitMQ)으로 서비스를 등록한다.

![rabbitmq-service]

윈도우 서비스로 등록되었는지 확인한다.

![rabbitmq-win-service]

#### **6) RabbitMQ 서비스 삭제**

/sbin/rabbitmq-service.bat remove 명령어를 앞에서 등록한 윈도우 서비스를 삭제할 수 있다. 뭔가를 잘 못 설정하여 윈도우 서비스로 다시 등록하는 경우에 사용한다.

#### **7) RabbitMQ 사용자 등록**

RabbitMQ 관리 페이지를 사용하기 위해, 사용자가 등록되어야 한다.  
위에서 등록된 서비스롤 RabbitMQ를 실행하도록 한다.  
그리고 윈도우 command 창을 열어 아래 명령어를 실행한다.

```
# 사용자 등록
/sbin/rabbitmqctl add_user admin admin
```

```
# 사용자 권한 부여
/sbin/rabbitmqctl set_user_tags admin administrator
```

ID/PW admin/admin 사용자를 등록하고, admin 사용자에 administrator 권한을 주는 명령어이다.

#### **8) RabbitMQ 관리 페이지 확인**

사용자 등록까지 완료되었으면 http://localhost:15672에 접속해 Rabbitmq 관리 페이지에 접속하여 admin 계정으로 로그인한다.

![rabbitmq-mgr]

admin 계정으로 로그인하여 Permission이 주어져있는지 확인한다.

![rabbitmq-admin-check]

#### **9) Operato 관리자 페이지에서 사이트 (Virtual Host) 추가 설정**

Operato 관리자 화면 및 서버가 설치되었다면 (설치 방법은 이후에 설명) Operato 관리자 페이지의 [메시지 M/W > 사이트 관리] 화면에서 RabbitMQ 사이트 (Virtual Host)를 추가한다.

RabbitMQ 사이트 (Virtual Host)는 Operato의 도메인 개념과 유사한 개념으로 RabbitMQ의 논리적인 구분 공간 (사이트)으로 생각하면 된다. 따라서 RabbitMQ 사이트 코드는 도메인과 1:1 매핑이 되므로 아래 그림과 같이 도메인의 미들웨어 사이트 코드값과 동일해야 하고 Convention으로 이뤄진 프레임워크 특성상 도메인 코드와 미들웨이 사이트 코드를 동일하게 설정하도록 한다. (동일 영문 코드에 도메인 코드는 대문자로 미들웨어 사이트 코드는 소문자로 설정)

즉 Operato의 개별 도메인은 RabbitMQ의 사이트 (Virtual Host)라는 논리적인 구분된 공간을 할당받아 사용한다.

방법은 아래 그림과 같이 사이트 명과 사이트 코드를 결정한 후 추가한다. [스택 추적] 필드는 최초 생성시에는 반드시 체크한다. 그런 후 [저장] 버튼을 누르면 Operato 서버에서 해당 코드로 RabbitMQ 사이트 (Virtual Host)를 생성한다.

![rabbitmq-add-site]

![rabbitmq-domain-ref]

[스택 추적] 필드는 메시지 이력을 관리할 지 여부를 선택하는 것이다. 최초에는 반드시 설정하여 테스트하다가 안정화 된 이후에 필요시 체크 박스 해제 후 [저장]하면 메시지 이력을 저장하지 않게된다.

여기까지 되었다면 RabbitMQ 관리자 페이지 [Admin > Virtual Hosts]에서 추가된 사이트를 확인할 수 있다.

![rabbitmq-confirm-vhost]

[erlang-path]: {{site.baseurl}}/assets/install/rabbitmq-install/erlang-setting.png
{: width="499px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq-unzip]: {{site.baseurl}}/assets/install/rabbitmq-install/rabbitmq-unzip.png
{: width="499px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq-run]: {{site.baseurl}}/assets/install/rabbitmq-install/run-rabbitmq.png
{: width="499px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq-conf]: {{site.baseurl}}/assets/install/rabbitmq-install/rabbitmq-conf-dir.png
{: width="499px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq-service]: {{site.baseurl}}/assets/install/rabbitmq-install/rabbitmq-service.png
{: width="499px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq-win-service]: {{site.baseurl}}/assets/install/rabbitmq-install/rabbitmq-win-service.png
{: width="499px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}


[rabbitmq-mgr]: {{site.baseurl}}/assets/install/rabbitmq-install/rabbitmq-mgr.png
{: width="499px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq-admin-check]: {{site.baseurl}}/assets/install/rabbitmq-install/rabbitmq-admin-check.png
{: width="499px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq-add-site]: {{site.baseurl}}/assets/install/rabbitmq-install/rabbitmq-add-site.png
{: width="599px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq-domain-ref]: {{site.baseurl}}/assets/install/rabbitmq-install/rabbitmq-domain-ref.png
{: width="599px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq-confirm-vhost]: {{site.baseurl}}/assets/install/rabbitmq-install/rabbitmq-confirm-vhost.png
{: width="599px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}