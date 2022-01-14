---
index: 3.1
display_index: "3.1"
title: Operato-lighting 전 사전설치 항목 
---

- 앞으로 설치될 Sw를 위해서 경로를 설정해주어야한다.
- 기본경로는 /home/계정명/ 으로 시작한다.

/home/계정명/ 경로에서 설치되는 소프트웨어에 맞는 이름으로 디렉토리를 생성해준다. [ sudo mkdir 디렉토리명 ]

![witch_01][witch_01]

/home/계정명/소프트웨어명/ 경로에서 세부경로로 나누어준다. 
보통 필요한 디렉토리는 client / server / scripts / infra-sw로 나뉘며 operato-lighting은 operato-lighting / infra-sw / scripts로 생성해준다.

![witch_02][witch_02]

sudo mkdir operato-lighting
sudo mkdir infra-sw 
sudo mkdir scripts

![witch_03][witch_03]

**추가적으로 생성된 디렉토리들의 소유자,그룹,권한등이 root로 되어있지 않도록 한다.**

[witch_01]: {{site.baseurl}}/assets/mkdir/witch_01.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[witch_02]: {{site.baseurl}}/assets/mkdir/witch_02.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[witch_03]: {{site.baseurl}}/assets/mkdir/witch_03.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}