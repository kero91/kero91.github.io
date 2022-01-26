---
index: 5.3
display_index: "5.3"
title: 마스터 & 메시지 M/W 설정
--- 

이번장에서는 Operato-lighting에서의 Gateway / Indicator 연동을 위해 해야하는 기본절차에 대해 알아보겠습니다.

#### **1) Gateway 등록  

게이트웨이, 지시기 매핑이 준비되었다면 Operato-lighting 화면에서 스테이지코드 , 게이트웨이 코드 , 게이트웨이IP , 채널번호 , 팬번호,설정이름를 작성해주어야한다.  
Operato-lighting에서는 Operato Manager와 달리 표시기 통신을 위해 간소화 되어있다.  
위의 설명과 같이 설정된 Excel파일의 정보를 통해서 Operato-lighting에 정보 세팅을 통하여 게이트웨이와의 통신준비를 한다.

![guide_01][guide_01]  

![guide_02][guide_02]  

#### **2) Indicator 등록  

표시기 등록시에는 게이트웨이코드 / 인디케이터코드 / 인디케이터번호 / 팬번호 / 채널번호를 등록해주어야한다.  

![guide_04][guide_04]

#### **3) Indicator Configure 등록  

게이트웨이에 매핑되어야하는 값이므로 하나 세팅해둔다.  

![guide_05][guide_05]

#### **4) 역활등록 

고객사 이름으로 역할등록을 진행한다.  ex ) 교보문고의경우 kyobo / kyobo

![guide_12][guide_12]  

![guide_13][guide_13]  

그리고 해당 역할에 권한을 부여하도록 한다. 

![guide_15][guide_15]  

#### **5) 단말장치 확인  

![guide_18][guide_18]  

![guide_18][guide_19]  

![guide_18][guide_20]  

#### **6) appliance 생성  
 
인증토큰을 생성하기 이전에 appliance를 하나 등록해준다 해당 appliance를 통해 인증토큰을 받을 수 있다.

![guide_08][guide_08]  

고객사 이름으로 Name / Description을 채워넣는다.

![guide_09][guide_09]  

#### **7) 인증토큰 생성  

appliance credentials항목에서 Generate New Access Token 버튼으로 HTTP통신을 위한 Token을 생성해준다. ( API통신등에도 이용 )

![guide_10][guide_10]    

lighting폴더의 config에서 config.production.js파일을 열어 Token옵션에 생성된 토큰을 넣어준다.

![guide_11][guide_11]

#### **8) Indicator ON/OFF

상기의 1-7번 설정이 끝났다면 , 우측 탭에서 API샌드박스 메뉴로 이동한다.  
우리가 여기서 이용할 메뉴는 , 2가지이다.  
POST: /indicators/control/on  
POST: /indicators/control/off  
![guide_21][guide_21]  

기본적인 통신은 HTTP로 이루어지며 메시지는 JSON방식으로 사용한다.  
우측상단의 Try it out을 클릭후 사용한다.   

![guide_22][guide_22]  

Try it out을 누르면 JSON전문하단에 버튼이 생기고 , JSON전문을 설정후 버튼을 누르면 Gateway로그에 해당 Indicator의 ID값이 찍힌걸 확인할 수 있다.  
---
{  
            "gw_id": "kyobo/KBMK01", // Gateway Code  
            "action_type": "pick", // 표시기 ON 방식  
            "ind_list": [  
            {  
            "id": "F00001", // Indicators id  
            "biz_id": "F00001", //Indicators id  
            "read_only": false,  
            "org_relay": 1,  
            "org_box_qty": 1,  
            "org_boxin_qty": 1,  
            "org_ea_qty": 1,  
            "color": "Y", // 색상  
            "btn_mode":"B" // 깜박임모드  
            }  
]}  
---
![guide_24][guide_24]  

![guide_23][guide_23]  

/indicators/control/off , 표시기 OFF에서도 방식은 상기와 동일하다.
---
{  
    "gw_id": "kyobo/KBMK01", // Gateway Code  
    "ind_list": [  
        "F00001", // Indicators id  
]}  
---

![guide_25][guide_25]  



[guide_01]: {{site.baseurl}}/assets/guide/guide_01.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_02]: {{site.baseurl}}/assets/guide/guide_02.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_03]: {{site.baseurl}}/assets/guide/guide_03.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_04]: {{site.baseurl}}/assets/guide/guide_04.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_05]: {{site.baseurl}}/assets/guide/guide_05.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_06]: {{site.baseurl}}/assets/guide/guide_06.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_08]: {{site.baseurl}}/assets/guide/guide_08.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_09]: {{site.baseurl}}/assets/guide/guide_09.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_10]: {{site.baseurl}}/assets/guide/guide_10.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_11]: {{site.baseurl}}/assets/guide/guide_11.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_12]: {{site.baseurl}}/assets/guide/guide_12.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_13]: {{site.baseurl}}/assets/guide/guide_13.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_14]: {{site.baseurl}}/assets/guide/guide_14.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_15]: {{site.baseurl}}/assets/guide/guide_15.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_16]: {{site.baseurl}}/assets/guide/guide_16.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_17]: {{site.baseurl}}/assets/guide/guide_17.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_18]: {{site.baseurl}}/assets/guide/guide_18.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_19]: {{site.baseurl}}/assets/guide/guide_19.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_20]: {{site.baseurl}}/assets/guide/guide_20.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_21]: {{site.baseurl}}/assets/guide/guide_21.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_22]: {{site.baseurl}}/assets/guide/guide_22.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_23]: {{site.baseurl}}/assets/guide/guide_23.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_24]: {{site.baseurl}}/assets/guide/guide_24.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}

[guide_25]: {{site.baseurl}}/assets/guide/guide_25.png
{: width="700px" style="margin-bottom:30px; margin-top:5px; border: 4px; border-style: solid; border-color: #555"}