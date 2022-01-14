---
index: 3.1
display_index: "3.1"
title: Operato-lighting 전 사전설치 항목 
---

- 앞으로 설치될 Sw를 위해서 경로를 설정해주어야한다.
- 기본경로는 /home/계정명/ 으로 시작한다.

/home/계정명/ 경로에서 설치되는 소프트웨어에 맞는 이름으로 디렉토리를 생성해준다. [ sudo mkdir 디렉토리명 ]

![witch_1][witch_1]

/home/계정명/소프트웨어명/ 경로에서 세부경로로 나누어준다. 
보통 필요한 디렉토리는 client / server / scripts / infra-sw로 나뉘며 operato-lighting은 operato-lighting / infra-sw / scripts로 생성해준다.

![witch_2][witch_2]

sudo mkdir operato-lighting
sudo mkdir infra-sw 
sudo mkdir scripts

![witch_3][witch_3]

**추가적으로 생성된 디렉토리들의 소유자,그룹,권한등이 root로 되어있지 않도록 한다.**

[witch_1]: {{site.baseurl}}/assets/witch/witch_1.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[witch_2]: {{site.baseurl}}/assets/witch/witch_2.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[witch_3]: {{site.baseurl}}/assets/witch/witch_3.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}