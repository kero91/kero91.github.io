---
index: 1
display_index: "1"
title: 개요
---

본 문서는 Operato Lighting 운영환경 구축 및 운영에 관한 가이드 문서이다. 여기서는 시스템 운영을 위해 필요한 소프트웨어 설치 및 설정, 애플리케이션 실행/중지 및 설정 등에 관하여 설명한다.

시스템 설치 절차는 아래와 같다. 본 문서는 운영환경에 사용되는 시스템이 Linux (Ubnutu)인 경우를 가정하여 기술한다.

```
  1. Server default setting 
      - Server 계정설정
      - teamviewer 설치
      - Infra-Software > repository 확인

  2. Infra Software 설치
      - 디렉토리 생성
      - apt-settings
      - nodejs ( npm,nvm )
      - postgresql ( db설치 )
      - rabbitmq 설치

  3. Operato Lighting 설치
      - Operato Lighting 애플리케이션 설치
      - Operato Lighting 애플리케이션 설정 (config.production.js)
      - Operato Lighting 애플리케이션 실행

  4. Operato Lighting 셋업
      - 게이트웨이 셋업
      - 표시기 셋업
      - 표시기 설정 셋 셋업
      - Operato Lighting Restart

  5. 표시기 게이트웨이 설정
      - 게이트웨이 - Lighting 연동 프로세스
      - ...


```