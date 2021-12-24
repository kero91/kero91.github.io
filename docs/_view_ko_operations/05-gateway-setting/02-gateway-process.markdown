---
index: 5.1
display_index: "5.1"
title: 게이트웨이-서버 연동 절차
---

여기서는 게이트웨이와 Operato 서버 간 연동 프로세스를 간단하게 설명한다.


#### **1) 메시지 아키텍쳐**

Operato 서버와 게이트웨이 간의 통신은 메시지 미들웨어 (RabbitMQ)를 통해서 이뤄진다.
메시지 미들웨어는 신뢰성 있는 메시지 통신 기능을 제공해주므로 여러 애플리케이션 간 메시지를 서로 주고 받을 때 애플리케이션 간 결합도를 낮출 수 있는 장점이 있다. 이러한 점은 여러 종류의 설비 통신을 지원해주므로 Operato 물류 제품이 WCS로의 위상을 가질 수 있게 하는 기반이 된다.

![mw-architecture][mw-architecture]

#### **2) 게이트웨이 부팅**

게이트웨이 부팅 시 프로세스는 아래 그림과 같다.

![gw-boot-process][gw-boot-process]

#### **3) 지시기 점등**

지시기 점등 프로세스는 아래 그림과 같다.

![indicator-on-process][indicator-on-process]

#### **4) 지시기 교체**

지시기 교체 프로세스는 아래 그림과 같다.

![indicator-change-process][indicator-change-process]

[mw-architecture]: {{site.baseurl}}/assets/install/gateway-setting/mw-architecture.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[gw-boot-process]: {{site.baseurl}}/assets/install/gateway-setting/gw-boot-process.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[indicator-on-process]: {{site.baseurl}}/assets/install/gateway-setting/indicator-on-process.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[indicator-change-process]: {{site.baseurl}}/assets/install/gateway-setting/indicator-change-process.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}