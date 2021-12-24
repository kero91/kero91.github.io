---
index: 5.3
display_index: "5.3"
title: 마스터 & 메시지 M/W 설정
---

게이트웨이, 지시기 매핑이 준비되었다면 Operato 매니저 화면에서 Area, 스테이지, 설비 그룹, 랙, 셀, 지시기, 게이트웨이 마스터 데이터 및 지시지 설정 프로파일 설정을 해야하고 게이트웨이, 지시기 매핑 정보를 셀에 반영한다.

그 전에 Operato의 도메인 모델을 잠시 설명한다. Operato에서 물류 창고의 구조는 도메인 (물류 창고) > Area > 스테이지 > 설비 그룹 순으로 논리적으로 구분된다. 

Area와 설비 그룹은 단순한 구분 단위이고 스테이지는 설비별 실행 설정 단위가 된다. 즉 동일 스테이지에 있는 설비들은 지시기 설정, 작업 설정, 모바일 장비 설정 등이 동일하다고 보면된다.

설비 그룹은 물리적인 랙의 집합이고 랙은 다수의 셀로 구성되며 개별 셀에는 보통 하나의 지시기가 매핑이 되고 지시기 여러 개는 다시 하나의 게이트웨이와 매핑이 된다.

예를들어 물류 창고가 1, 2, 3층으로 나뉘어져 있다면 이는 Area로 구분하고 1층에 화주사 A, B, C를 위한 설비가 있고 각 화주사 별로 설비 설정이 다르다면 
1층 Area에 스테이지 1-A, 1-B, 1-C 형태로 구성이 될 것이고 1-A 스테이지에 Pick-To-Light 설비와 Put-To-Light 설비가 존재한다면 설비 그룹은 1-A-Pick-To-Light, 1-A-Put-To-Light으로 구성이 될 수 있다.

1-A-Pick-To-Light 설비 그룹에 다시 랙 1호기, 2호기, 3호기 ... 등으로 구성이 되고 개별 랙은 다수의 셀로 구성된다.

#### **1) 메시지 미들웨어 사이트 생성**

물류 창고는 물류 창고 코드가 존재한다. 이는 도메인에 설정한다. 
메시지 미들웨어에서 관리하는 도메인 (물류 창고) 레벨을 사이트 (Virtual Host)라고 한다.
도메인에 미들웨어 사이트 코드가 있는데 이것이 Virtual Host이다.

Operato 매니저 > 시스템 > 도메인 화면에서 설정한다.

![master-domain][master-domain]

도메인의 미들웨어 사이트 코드에 해당하는 사이트 (Virtual Host)를 생성하기 위해서 사이트를 생성한다.

Operato 매니저 > 메시지 M/W > 사이트 관리 화면에서 하단의 [추가] 버튼을 눌러서 사이트 코드를 도메인의 미들웨어 사이트 코드와 동일하게 입력하고 사이트 명을 도메인의 사이트 명으로 스택 추적을 체크한 후 [저장] 버튼을 누르면 정보가 저장이 된다.

![mw-sites][mw-sites]

저장이 완료되면서 메시지 미들웨어 사이드에는 사이트 (Virtual Host)가 생성된다.

![mw-virtual-host][mw-virtual-host]

#### **2) Area 및 스테이지 설정**

Area를 다음과 같이 설정할 수 있다. Area는 단순한 물류 창고의 구분 단위이므로 각 화면의 검색 조건에 포함될 수 있는 조건이 된다.

Operato 매니저 > 기준 정보 > Area 화면에서 설정한다.

![master-area][master-area]

하나의 Area는 하나 이상의 스테이지로 구성될 수 있다.

![master-stage][master-stage]

스테이지는 실행 단위이기도 하지만 게이트웨이 통신을 위한 Operato 서버 측 큐 생성 단위이기도 하다. 즉 스테이지 생성시에 스테이지 코드와 동일한 큐 이름이 생성된다.

Operato 매니저 > 기준 정보 > Stage 화면에서 설정한다.

![mqtt-stage-queue][mqtt-stage-queue]

#### **3) 설비 그룹, 랙 설정**

스테이지 하위에 설비 그룹을 설정한다. 설비 그룹 역시 Area와 마찬가지로 단순한 구분 단위이다.

Operato 매니저 > 장비 관리 > 설비 그룹 화면에서 설정한다.

![master-equip-group][master-equip-group]

하나의 설비 그룹은 하나 이상의 랙을 가질수 있다. 랙은 실제로 존재하는 물리적인 단위이고 여러 개의 셀로 구성된다.

Operato 매니저 > 장비 관리 > 랙 화면에서 설정한다.

![master-rack][master-rack]

#### **4) 셀 설정**

셀 설정은 이전에 앞에서 설명한 셀 별 지시기 매핑 정보를 통해서 설정한다.

![cell-indicator-mapping][cell-indicator-mapping]

셀 마스터를 아래와 같이 설정한다.

Operato 매니저 > 장비 관리 > 셀 화면에서 설정한다.

![master-cell][master-cell]

#### **5) 게이트웨이 설정**

게이트웨이 설정은 이전에 앞에서 설명한 게이트웨이 리스트 정보를 통해서 설정한다.

![gw-list][gw-list]

게이트웨이 마스터 설정시에 중요한 것은 그림상의 라우터 명인데 이 라우터 명은 {스테이지 코드}/GW/mqbase 규칙으로 명명해야한다.
이 규칙은 Operato 서버와 게이트웨이 간 미들웨이 통신에 중요한 정보이므로 반드시 이 규칙에 맞게 설정한다.
예를 들면 스테이지 코드가 D1-DPS 이라면 라우터 명은 D1-DPS/GW/mqbase가 되어야한다.
게이트웨이 IP는 실행에 영향을 미치지는 않고 단지 정보성으로 관리된다. 왜냐하면 Operato 서버와 게이트웨이간 통신은 메시지 미들웨어가 관할하기 때문인데 이는 Operato 서버와 게이트웨이가 메시지 미들웨어 접속 정보를 통해서 접속하기 때문이다.

Operato 매니저 > 장비 관리 > 라우터 화면에서 설정한다.

![master-gateway][master-gateway]

#### **6) 지시기 설정**

이 정보는 어떤 게이트웨이와 어떤 지시기 리스트가 매핑이 되는지를 관리한다. 위 에서 설정한 게이트웨이와 어떤 지시기들이 매핑되는지 라우터 코드와 지시기 정보만 있으면 된다. 지시기 명은 일반적으로 어느 셀 번호와 지시기가 매핑되는 지를 입력하지만 실행에 영향을 주는 정보는 아니다.

Operato 매니저 > 장비 관리 > 지시기 화면에서 설정한다.

![master-indicator][master-indicator]

#### **7) 지시기 설정 프로파일 설정**

지시기 설정 프로파일은 스테이지 별로 지시기의 설정을 관리한다. 이 때문에 스테이지가 실행의 단위가 된다라고 말할 수 있다.

Operato 매니저 > 설정 관리 > 지시기 설정 프로파일 화면에서 설정한다.

![indicator-profile][indicator-profile]

구체적인 지시기에 대한 설정은 Operato 매니저 설명에서 하기로 한다.

#### **8) 생성된 큐 확인**

여기까지 설정했다면 Operato 매니저 > 메시지 M/W > 메시지 큐 관리 화면에서 생성된 큐 리스트를 확인한다.

![mw-queues][mw-queues]

[master-domain]: {{site.baseurl}}/assets/install/gateway-setting/master-domain.png
{: width="500px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[mw-virtual-host]: {{site.baseurl}}/assets/install/gateway-setting/mw-virtual-host.png
{: width="600px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[master-area]: {{site.baseurl}}/assets/install/gateway-setting/master-area.png
{: width="400px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[master-stage]: {{site.baseurl}}/assets/install/gateway-setting/master-stage.png
{: width="400px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[mqtt-stage-queue]: {{site.baseurl}}/assets/install/gateway-setting/mqtt-stage-queue.png
{: width="600px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[master-equip-group]: {{site.baseurl}}/assets/install/gateway-setting/master-equip-group.png
{: width="400px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[master-rack]: {{site.baseurl}}/assets/install/gateway-setting/master-rack.png
{: width="400px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[master-cell]: {{site.baseurl}}/assets/install/gateway-setting/master-cell.png
{: width="400px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[master-gateway]: {{site.baseurl}}/assets/install/gateway-setting/master-gateway.png
{: width="400px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[master-indicator]: {{site.baseurl}}/assets/install/gateway-setting/master-indicator.png
{: width="400px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[indicator-profile]: {{site.baseurl}}/assets/install/gateway-setting/indicator-profile.png
{: width="400px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[mw-sites]: {{site.baseurl}}/assets/install/gateway-setting/mw-sites.png
{: width="500px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[mw-queues]: {{site.baseurl}}/assets/install/gateway-setting/mw-queues.png
{: width="400px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[gw-list]: {{site.baseurl}}/assets/install/gateway-setting/gw-list.png
{: width="400px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}

[cell-indicator-mapping]: {{site.baseurl}}/assets/install/gateway-setting/cell-indicator-mapping.png
{: width="350px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}