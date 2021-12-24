---
index: 2.1
display_index: "2.1"
title: NodeJS 설치
---

#### **1) 설치 파일 다운로드**
<a href="http://nginx.org/en/download.html">NginX</a> 에서 Windows 용 Stable version을 다운로드 한다.

해당 가이드 작성시 최신 버전은 1.16 이다.

![nginx-download]

해당 링크를 클릭하여 다운로드 받아 압축을 해제하고, 원하는 위치로 폴더를 이동한다.

#### **2) NginX 설정**

conf 폴더의 nginx.conf를 통하여 웹 서버 설정을 변경 할 수 있다.

nginx.conf 에는 http 안에 include 를 정의하여 특정 폴더의 설정 정보를 추가한다.

```
# nginx.conf #

http {
    ...
    include custom-conf/*.conf
    ...
}
```

위의 예는 추가적인 설정을 하기 위해서 conf 파일을 별도로 만들기 위한 예이다. 
이 부분은 Operato 매니저 설치, Operato 작업자 설치시에 자세히 다루기로 한다. 
아래는 custom.conf 파일의 예를 설명하는 것이므로 따라 하지 않아도 된다.

nginx.conf가 위치한 폴더에 custom-conf 폴더를 생성하고, custom.conf 파일을 생성한다.

```
# custom.conf #

server {

    server_name localhost;
    listen 80;
    client_max_body_size 500M;

    proxy_set_header X-Real-IP $remote_addr;

    location / {
            root 클라이언트 소스 경로/dist;
            index index.html;
    }

    location /rest {
            proxy_pass http://localhost:9500;
    }

    location /elidom/stomp {
            proxy_pass http://localhost:9500;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_http_version 1.1;
    }
}

server {
        listen 8080;

        location / {
                root 클라이언트 소스 경로/operator;
                index index.html;
        }

        location /rest {
                proxy_pass http://localhost:9500;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
                proxy_http_version 1.1;
        }
}
```

#### **3) NginX 실행**

![nginx-unzip]

nginx.exe 로 웹 서버를 실행 할 수 있다.

#### **4) NginX 서비스 등록**
nginx를 수동으로 실행하는 게 번거롭다면 윈도우 서비스로 등록할 수 있다.

nginx를 윈도우 서비스로 등록하기 위해서는 일단 nginx를 종료한다.

nginx를 윈도우 서비스로 등록하기 위해 먼저 등록을 편하게 해주는 소프트웨어
<a href="https://nssm.cc/download">nssm</a>를 다운로드 받고 원하는 디렉토리에 압축 해제만 하면 설치가 완료된다.

![nssm-directory][nssm-directory]

nssm 디렉토리에 가서 잘 풀렸는지 확인한 후에 명령 프롬프트 프로그램을 실행시키고 nssm 디렉토리로 이동한 다음 (64비트 서버인 경우 win64로 이동) 아래와 같이 nssm.exe 실행시킨다.

```
nssm install
```

명령을 실행하면 아래와 같이 실행된다.

![win-svc-reg][win-svc-reg]

팝업 화면에 앞서 설정한 nginx.exe 실행 파일의 경로 및 서비스의 명칭을 입력하고 [Install Service] 버튼을 눌러 서비스를 생성한다.

![win-svc-reg-2][win-svc-reg-2]

[Detail] 탭으로 가면 서비스 자동 실행 옵션도 있다.

![win-svc-auto-start][win-svc-auto-start]

서비스가 정상적으로 생성되면 작업관리자를 통해 서비스 작동 여부를 확인하고 서비스를 시작/종료해본다.

![win-svc-start][win-svc-start]

윈도우 서비스 등록을 삭제하려면 명령 프롬프트에서 아래와 같이 실행한다.

```
nssm remove 윈도우 서비스 명
```

![win-svc-unreg][win-svc-unreg]


[nginx-download]: {{site.baseurl}}/assets/install/nginx-install/nginx-download.png
{: width="169px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[nginx-unzip]: {{site.baseurl}}/assets/install/nginx-install/nginx-unzip.png
{: width="585px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[nssm-directory]: {{site.baseurl}}/assets/install/server-install/nssm-directory.png
{: width="450px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[win-svc-reg]: {{site.baseurl}}/assets/install/server-install/win-svc-reg.png
{: width="450px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[win-svc-reg-2]: {{site.baseurl}}/assets/install/nginx-install/win-svc-reg-2.png
{: width="450px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[win-svc-auto-start]: {{site.baseurl}}/assets/install/server-install/win-svc-auto-start.png
{: width="450px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[win-svc-start]: {{site.baseurl}}/assets/install/nginx-install/win-svc-start.png
{: width="450px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[win-svc-unreg]: {{site.baseurl}}/assets/install/nginx-install/win-svc-unreg.png
{: width="450px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}