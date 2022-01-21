---
index: 3.5
display_index: "3.5"
title: rabbitmq-setting
---

**Rabbitmq-Setting**
-서버와 Gateway와 통신을 하기 위해 필요한 Sw이다.

-명령어 : sudo apt-get update
 -> 패키지 리스트 확인
 
1. infra-repository에서 rabbitmq관련 file을 다운로드 한다.

![rabbitmq_01][rabbitmq_01]

2. rabbitmq 설치전에 erl이 사전설치가 필요하며 , ubuntu에서 .deb파일은 바로 설치가 가능하다.
![rabbitmq_02][rabbitmq_02]

3. terminal에서 erl이 정상적으로 설치되었는지 확인한다.
![rabbitmq_03][rabbitmq_03]

4. erl설치후 다운받은 rabbitmq파일을 압축해제한다.
-명령어 : sudo tar -xvf rabbitmq-server-generic-unix-3.7.1.7tar.xz [ sudo tar -xvf filename ]
 -> 패키지 리스트 확인

![rabbitmq_04][rabbitmq_04]

5. 압축이 풀린 rabbitmq폴더명을 rabbitmq로 변경한다 

![rabbitmq_05][rabbitmq_05]

6. rabbitmq를 사용하기전 plugins들을 추가해주어야한다.
-명령어 : sudo ./rabbitmq-plugins enable rabbitmq_management
-명령어 : sudo ./rabbitmq-plugins enable rabbitmq_mqtt 
-명령어 : sudo ./rabbitmq-plugins enable rabbitmq_web_mqtt 

![rabbitmq_06][rabbitmq_06]

7. plugins 추가후 rabbitmq-server를 실행한다.

![rabbitmq_07][rabbitmq_07]

8. rabbitmq가 정상적으로 실행되었다면 , http://localhost:1572 로 접근하면된다.

![rabbitmq_08][rabbitmq_08]

9. 초기에는 다른세팅이 되어있지 않기때문에 guest / guest로 로그인한다. 

![rabbitmq_09][rabbitmq_09]

10. admin탭으로 이동하여 , add user에서 admin id를 추가한후  Tags에 set에 있는 admin을 클릭하여 administrator권한을 부여한다.

![rabbitmq_10][rabbitmq_10]

11. rabbitmq폴더의 etc -> rabbitmq아래의 rabbitmq.conf파일과 rabbitmq-env.conf파일을 생성한다.

![rabbitmq_11][rabbitmq_11]
![rabbitmq_12][rabbitmq_12]

 
[rabbitmq_01]: {{site.baseurl}}/assets/rabbitmq/rabbitmq_01.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq_02]: {{site.baseurl}}/assets/rabbitmq/rabbitmq_02.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq_03]: {{site.baseurl}}/assets/rabbitmq/rabbitmq_03.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq_04]: {{site.baseurl}}/assets/rabbitmq/rabbitmq_04.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq_05]: {{site.baseurl}}/assets/rabbitmq/rabbitmq_05.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq_06]: {{site.baseurl}}/assets/rabbitmq/rabbitmq_06.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq_07]: {{site.baseurl}}/assets/rabbitmq/rabbitmq_07.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq_08]: {{site.baseurl}}/assets/rabbitmq/rabbitmq_08.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq_09]: {{site.baseurl}}/assets/rabbitmq/rabbitmq_09.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq_10]: {{site.baseurl}}/assets/rabbitmq/rabbitmq_10.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq_11]: {{site.baseurl}}/assets/rabbitmq/rabbitmq_11.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[rabbitmq_12]: {{site.baseurl}}/assets/rabbitmq/rabbitmq_12.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}
