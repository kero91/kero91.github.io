---
index: 10.5
display_index: "10.5"
title: 지시기 점,소등 테스트
---

모든 것이 정상적으로 설정되었다면 이제 지시기에 대한 점, 소등 테스트를 할 수 있다.
Operato 매니저 > 설정 관리 > PTL Test 화면에 접속하여 테스트 하고자 하는 대상을 랙, Station, 셀 순으로 차례로 선택한다.

그런 다음 지시기 설정 프로파일을 선택한다. 반드시 선택한 랙이 소속된 스테이지의 지시기 설정 프로파일 설정을 설정해야 한다.
마지막으로 지시기 버튼 색상과 수량을 임의로 선택한 후 [점등] 버튼을 누르면 대상 지시기들의 게이트웨이에 지시기 점등 메시지가 전달되고 지시기가 점등이 된다.

![ptl-test][ptl-test]

점등이 된 후 [소등] 버튼을 누르면 선택된 대상 지시기들에 대해서 소등 메시지가 전달이 되고 소등이 된다.

여기까지 모두 잘 되었다면 이제 메시지 미들웨어 및 게이트웨이 관련 설정은 끝났다고 봐도 된다.

[ptl-test]: {{site.baseurl}}/assets/install/gateway-setting/ptl-test.png
{: width="600px" style="margin-bottom:30px; margin-top:5px; border: 2px; border-style: solid; border-color: #555"}