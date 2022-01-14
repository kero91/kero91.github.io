---
index: 3.2
display_index: "3.2"
title: apt를 통한 module setting
---

**원활한 작업을 위하여 apt를통하여 curl,bulid등 필요한 빌드환경을 세팅해둔다.**

- apt를 통해서 curl을 설치한다.
curl이란 Client Url로 Client에서 Command Line or Source Code로 웹브라우저처럼 사용가능하도록 하며 
서버와 통신할 수 있다 , 그리고 다양한 프로토콜들을 지원한다.

명령어 : sudo apt-get install -y curl 
![curl][curl]

- apt를 통해서 build환경을 설치해야한다.

명령어 : sudo apt-get install build-essential libssl-dev 
![build][build]


[curl]: {{site.baseurl}}/assets/build/curl.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}


[curl]: {{site.baseurl}}/assets/build/build.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}