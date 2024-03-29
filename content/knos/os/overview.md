---
id: overview
create_date: 2024-02-19 00:00
title: 운영체제 개요
---

# 운영체제 개요

<YouWillLearn>
- 운영체제의 전반적인 주제에 대해 학습한다.
- **운영체제**는 컴퓨터 시스템의 자원을 관리하고 컴퓨터 프로그램이 동작하기 위한 서비스를 제공하는 대표적인 **시스템 소프트웨어**이다.
- **커널 모드**에서는 하드웨어를 직접 제어할 수 있고, **사용자 모드**는 하드웨어를 직접 제어할 수 없다.
- 응용프로그램은 사용자 모드에서 동작하므로, 하드웨어에 대한 제어가 필요한 경우 **시스템 호출**을 통해 필요한 서비스를 운영체제에 요청한다.
- 운영체제의 주요 구성 요소에는 **프로세스 관리자**, **메모리 관리자**, **장치 관리자**, **파일 관리자**가 있다.
- 운영체제의 대표적인 유형
  1. 일괄처리 유형체제 (Batch processing operating system)
  2. 시분할 운영체제 (Time-sharing operating system)
  3. 실시간 운영체제 (Real-time operating system)
  4. 분산 운영체제 (Distributed operating system)
</YouWillLearn>

<InlineToc>
  <TocData />
</InlineToc>

<h2 id="computer-system">컴퓨터 시스템</h2>

컴퓨터 시스템은 하드웨어, 소프트웨어, 데이터, 네트워크 및 사용자로 구성된 전체적인 컴퓨팅 환경을 말한다. 즉, 컴퓨터를 구성하고 동작시키는데 필요한 모든 구성 요소와 자원을 포함한다. 세부적으로는 방대할 수 있으나, 큰 덩어리로써는 하드웨어와 소프트웨어로 구분할 수 있다. 컴퓨터는 이 둘의 상호작용에 의해 작동한다.

<h3 id="hardware">하드웨어</h3>

하드웨어는 컴퓨터를 이루는 물리적인 요소로써 컴퓨터가 활용할 수 있는 실질적인 자원을 제공한다.

- CPU (연산)
- RAM (주기억장치)
- H/D, SSD (보조기억장치)
- Monitor 등 (출력장치)
- Keyboard 등 (입력장치)
- 등등 컴퓨터를 이루는 물리적인 것들이 하드웨어에 속한다.

<h3 id="software">소프트웨어</h3>

소프트웨어는 컴퓨터를 이루는 논리적인 요소를 말한다. 더 정확히 말하자면 컴퓨터 시스템을 효율적으로 운영하기 위해 개발된 프로그램의 총칭이다. 

- 응용 소프트웨어(Application Software): 사용자가 직접 사용하는 프로그램들이다. (ex: 워드프로세서)
- 시스템 소프트웨어(System Software): 소프트웨어가 자원(하드웨어)을 잘 활용할 수 있도록 컨트롤하는 프로그램이다. **운영체제**가 대표적인 시스템 소프트웨어에 속한다. 


<h2 id="mode">커널모드와 사용자모드</h2>

<h3 id="kernel-mode">커널 모드(Kernel Mode) - 슈퍼바이저 모드</h3>

커널모드는 운영체제의 핵심 부분으로, 컴퓨터 시스템의 하드웨어와 소프트웨어 간의 인터페이스 역할을 담당한다.
커널모드는 다양한 역할을 수행한다.
커널 내붕
- 시스템 리소스(자원) 관리
- 프로세스 스케줄링
- 입출력 처리
- 파일 시스템

커널은 크게 **일체형(Monolithic) 커널**과 **마이크로(Micro) 커널**이 있다.

- 일체형 커널 : 커널 내부요소가 효율적으로 동작하나, 커널 중 한 요소라도 장애가 발생한다면 시스템 전체가 마비될 수 있다. 대표적인 일체형 커널로 UNIX와 Linux가 있다.

- 마이크로 커널 : os 요소의 대부분을 커널 바깥으로 분리한 형태이다. **메모리 관리, 멀티 태스킹, IPC** 등 필수 요소만 커널에 남기고 나머지는 외부 요소로 사용한다. 새로운 서비스를 추가하여 운영체제 확장이 쉽고, 유지보수가 용이하여 안정성이 우수하다.
하지만 커널 외부 요소들과 소통할 때마다 IPC가 필요하여 성능 저하가 발생한다.

<BoxWithTitle title="IPC">
Inter-Process Communication(프로세스간 통신)의 약어로써 하나 이상의 프로세스가 데이터를 주고받거나 서비스를 요청하고 제공하기 위해 사용되는 메커니즘. 여러 프로세스가 동시에 실행되는 다중 프로세스 환경에서 프로세스 간의 상호작용을 위해 사용됨.
</BoxWithTitle>

<h3 id="user-mode">사용자 모드(User Mode) - 보호 모드</h3>

하드웨어를 직접 제어하는 CPU 명령어를 사용할 수 없는 모드로써 응용프로그램이 사용자 모드에서 동작한다.

<h2 id="system-call">시스템 호출(System call)</h2>

시스템 호출은 운영체제가 제공하는 서비스를 사용하기 위해 응용 프로그램이 운영체제에 요청하는 인터페이스이다. 응용 프로그램은 시스템 호출을 사용하여 운영체제의 기능을 활용하고, 하드웨어 자원에 접근할 수 있다.

<h2 id="operation-software">운영체제</h2>

<h3 id="os-component">구성</h3>

운영체제는 컴퓨터 시스템의 자원의 성격에 따라 구분될 수 있다.

1. 프로세스 관리자 : 프로세스 생성 및 삭제, CPU 할당, 스케쥴링, 프로세스 상태관리, 상태전이 처리
2. 메모리 관리자 : 메모리(주기억장치) 공간에 대한 요구의 유효성 확인, 메모리 할당 및 회수, 메모리 공간 보호
3. 장치 관리자 : 컴퓨터 시스템의 모든 장치 관리. 시스템 장치의 할당, 작동, 반환
4. 파일 관리자 : 컴퓨터 시스템의 모든 파일 관리. 저장 장치의 공간 관리. 파일 접근 제한 관리

<h3 id="os-type">유형</h3>

운영체제에는 필요한 자원관리 방법에 따라 유형이 구분될 수 있다.

1. 일괄처리(Batch Processing) : 작업을 모아서 순서대로 처리하는 방식. 나중에 들어온 작업은 먼저 들어온 작업이 끝날때까지 대기
2. 시분할(Time sharing) : 각 사용자의 프로그램을 한번에 조금씩 수행하는 방식
3. 실시간(Real Time) : 원하는 시간에 결과를 얻을 수 있는 처리방식을 가지고 있으며, 처리 결과가 현재의 결정에 영향을 주는 환경에 사용되는 방식. 예를들어 미사일 제어나 증권거래 관리 시스템 등에 사용됨.
4. 분산(Distributed) : 2개 이상의 컴퓨터 시스템의 네트워크에 서로 연결되어 서로의 자원을 이용하는 시스템. 다른 컴퓨터 자원을 쓰는 것이 자신의 컴퓨터 자원을 쓰는 것 처럼 동작해야 함.
