---
index: 3.4
display_index: "3.4"
title: postgresql 설치
---

**postgresql 설치**
-ubuntu에서의 postgresql 설치는 기본적으로 postgresql홈페이지를 방문하면 , 진행절차가 나와있으니 홈페이지를 참고하여 설치해도 된다.

-명령어 : sudo apt-get update
 -> 패키지 리스트 확인
 
![db_01][db_01]
 
-명령어 : wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
 -> GPG키를 이용하여 apt가 postgresql에서 다운로드한 패키지가 위변조되거나 손상되지 않았는지 확인 

![db_02][db_02]

-명령어 : sudo apt-get install postgresql-13
 -> postgresql-13버전 다운로드 

![db_03][db_03]

-명령어 : dpkg -l | grep postgresql 
 -> postgresql이 정상적으로 dpkg되었는지 확인 

![db_04][db_04]

-명령어 : sudo ss -antp | grep 5432
 -> postgresql의 port인 5432가 떠있는지 확인 

![db_05][db_05]

-명령어 : sudo pg_isready
 -> 접속이 가능한 상태인지 확인

![db_06][db_06]

-명령어 : sudo -i -u postgres
 -> postgresql의 postgres 접속

![db_07][db_07]

-명령어 : alter user postgres with password'비밀번호';
 -> postgres의 초기비밀번호 설정 

![db_08][db_08]

**/etc/postgresql/버전/main 아래의 파일중**
postgresql.conf파일 수정 -> 외부접근 가능하도록 * 변경 

![db_09][db_09]

pg_hba.conf파일 수정 -> 외부접근시 가능하도록 trust , md5 

![db_10][db_10]


[db_01]: {{site.baseurl}}/assets/db/db_01.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[db_02]: {{site.baseurl}}/assets/db/db_02.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[db_03]: {{site.baseurl}}/assets/db/db_03.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[db_04]: {{site.baseurl}}/assets/db/db_04.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[db_05]: {{site.baseurl}}/assets/db/db_05.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[db_06]: {{site.baseurl}}/assets/db/db_06.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[db_07]: {{site.baseurl}}/assets/db/db_07.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[db_08]: {{site.baseurl}}/assets/db/db_08.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[db_09]: {{site.baseurl}}/assets/db/db_09.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[db_10]: {{site.baseurl}}/assets/db/db_10.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}