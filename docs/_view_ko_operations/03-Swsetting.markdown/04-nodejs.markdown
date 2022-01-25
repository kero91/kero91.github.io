---
index: 3.3
display_index: "3.3"
title: Git,Nvm,Npm,Nodejs,Yarn 설치 
---

**operato-lighting은 Node기반으로 만들었기때문에 operato와 달리 Nodejs를 설치해주어야한다.**
-Git설치 , 이후에 lighting > client build를 하는 과정에서 필요함

-명령어 : sudo apt-get install git 
-> 패키지 리스트에 git update 

![git_01][git_01]

-명령어 : sudo apt install git 
-> 패키지 리스트를 읽어와 git install 

![git_02][git_02]


**NVM설치**
-build환경은 3.2에서 세팅해두었다.


-명령어 : curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
-> nvm v0.33.11버전을 install 하는 명령어 

![nvm_01][nvm_01]

-명령어 : source ~/.bashrc
-> curl 명령어를 통해 install하게되면 bashrc파일에 nvm환경설정정보가 setup된다.
-> 해당명령어를 통해 환경파일 적용 

![nvm_02][nvm_02]


**Nodejs설치**
-nvm이 NodeJS 버전을 관리해주기때문에 , NVM을 통하여 Install , Setup진행한다.
-

-명령어 : nvm install [Node버전] 
-> Node v (14.18.2)

-명령어 : nvm use [Node버전]
-> or nvm alias default [Node버전] 해주면 해당 버전 Nodejs를 기본으로 사용가능하다.

![nvm_03][nvm_03]

**-설정후 node -v / npm -version 으로 nodejs , npm이 정상적으로 설치되었는지 확인**

**Yarn설치**
-npm을 통해서 yarn을 받는다.  

-명령어 : npm install -g yarn

![yarn_01][yarn_01]

-yarn 설치후 yarn프로젝트의 dependency를 하기 명령어를 통해 받는다.  

-명령어 : yarn install 

![yarn_02][yarn_02]

-yarn build가 정상적으로 동작하는지 확인만 해둔다 , 추후 4장에서 yarn을 통하여 client를 생성할때 사용한다.  
 ( 해당 명령어가 정상적으로 먹지않고 오류가 뜬다면 yarn이 정상적으로 설치되지 않은것이니 , 재설치를 요한다.)

-명령어 : yarn build 

![yarn_03][yarn_03]





[git_01]: {{site.baseurl}}/assets/git/git_01.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[git_02]: {{site.baseurl}}/assets/git/git_02.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[nvm_01]: {{site.baseurl}}/assets/nvm/nvm_01.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[nvm_02]: {{site.baseurl}}/assets/nvm/nvm_02.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[nvm_03]: {{site.baseurl}}/assets/nvm/nvm_03.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[yarn_01]: {{site.baseurl}}/assets/yarn/yarn_01.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[yarn_02]: {{site.baseurl}}/assets/yarn/yarn_02.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[yarn_03]: {{site.baseurl}}/assets/yarn/yarn_03.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[yarn_04]: {{site.baseurl}}/assets/yarn/yarn_04.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}