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
    endpoint: 'mqtt://60.196.69.234:21883',
    options: {},
    mytopic: 'dps_server',
    gwFirmwareUrl: '',
    indFirmwareUrl: '',
    dblogging: true
  },
  legacy: {
    // legacyEndpoint: 'http://60.196.69.234:25001',
    // token: '82ef92c6-8aa5-4ed6-b737',
    legacyEndpoint: 'http://localhost:4000',
    legacyIndOnRes: 'http://localhost:4000/api/unstable/ind-on',
    legacyGwInitRpt: 'http://localhost:4000/api/unstable/gw-init',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlYTJlZWJmLTg3YzItNGUyOS1iODY3LTBkYzZjNTk5MzZhZiIsInVzZXJUeXBlIjoiYXBwbGlhbmNlIiwiYXBwbGlhbmNlIjp7ImlkIjoiNDk2ZDMwZjItOWEzOC00N2IzLTgzYjMtY2QxYjlkNDE5NWFlIn0sInN0YXR1cyI6ImFjdGl2YXRlZCIsImRvbWFpbiI6eyJzdWJkb21haW4iOiJzeXN0ZW0ifSwiaWF0IjoxNjE2Mzc0MDkyLCJleHAiOjE2NDc5MzE2OTIsImlzcyI6ImhhdGlvbGFiLmNvbSIsInN1YiI6ImFjY2Vzcy10b2tlbiJ9.7bCmyMOnx1oo-OY8BS3fAxvaQwT9RIEb715PQkVS6Xo',
    options: {}
  }
}
---

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


[migration_01]: {{site.baseurl}}/assets/client/migration_01.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[migration_02]: {{site.baseurl}}/assets/client/migration_02.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[migration_03]: {{site.baseurl}}/assets/client/migration_03.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[migration_04]: {{site.baseurl}}/assets/client/migration_04.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

