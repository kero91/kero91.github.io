---
index: 4.1
display_index: "4.1"
title: Operato Lighting config / migration setting
---

**Operato-Lighting Setting**

**Operato-Lighting file을 받은후 Ubuntu에서 압축해제** 
-/home/계정명/operato/ 의 경로에 파일 압축을 진행 
-압축해제후에는 디렉토리의 소유자,그룹,권한 확인을 먼저 진행하도록 합니다.

**lighting/config 아래의 config.product 파일내용변경**

---
module.exports = {  
  protocol: 'http',  
  port: 4000,  
  accessTokenCookieKey: 'access_token.lighting',  
  subdomain: "system",  
  ormconfig: {  
    name: 'default',  
    type: 'postgres',  
    database: 'lighting',  
    username: 'lighting',  
    password: 'lighting@2020',  
    host: '60.196.69.234',  
    port: 25008,  
    synchronize: true,  
    logging: true  
  },  
  indicator: {  
    endpoint: 'mqtt://admin:admin@ip:port',  // 해당정보는 Rabbitmq -> Overview -> Listening port -> mqtt에서 확인 가능하다 / Rabbitmq에서 생성해준 admin계정도 입력한다.  
    options: {},  
    mytopic: 'dps_server',  
    gwFirmwareUrl: '',  
    indFirmwareUrl: '',  
    dblogging: true  
  },  
  legacy: {  
    legacyEndpoint: 'http://localhost:4000',  
    legacyIndOnRes: 'http://localhost:4000/api/unstable/ind-on',  
    legacyGwInitRpt: 'http://localhost:4000/api/unstable/gw-init',  
    token: 'lighting에서 발급받은 토큰정보',  
    options: {}  
  }
}

---
-config.production.js의 endpoint에 필요한 rabbitmq정보  
![mqtt-port][mqtt-port]

**config.product의 파일내용 변경후 ( 양식/DB정보 ) DB migration 진행**

- 명령어 : yarn migration

![migration_01][migration_01]

**migration 진행시 product mode 선택**

![migration_01][migration_01]

**Please type [localhost] to confirm의 대괄호의 내용을 따라 적는다.**

![migration_02][migration_02]

**migration이 완료되면 postgresql에서 테이블이 확인 가능하다.**

![migration_03][migration_03]
![migration_04][migration_04]

**하기의 2장의 사진은 Rabbitmq의 Connection / Queue관련 정보이며 , 추후 Gateway - Rabbitmq간의 연동이 정상적으로 되면 , Gateway에 대한 정보가 나타난다.**

![mqtt-connection][mqtt-connection]  

![mqtt-gateway-queue][mqtt-gateway-queue]  


[migration_01]: {{site.baseurl}}/assets/client/migration_01.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[migration_02]: {{site.baseurl}}/assets/client/migration_02.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[migration_03]: {{site.baseurl}}/assets/client/migration_03.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[migration_04]: {{site.baseurl}}/assets/client/migration_04.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[mqtt-port]: {{site.baseurl}}/assets/guide/mqtt-port.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[mqtt-connection]: {{site.baseurl}}/assets/guide/mqtt-connection.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

mqtt-gateway-queue]: {{site.baseurl}}/assets/guide/mqtt-gateway-queue.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}
