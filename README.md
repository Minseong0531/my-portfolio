<div align="center">

<!-- logo -->

### 리액트 웹사이트 제작 프로젝트
#### 이 프로젝트는 비상업적 포트폴리오 용도로 제작되었으며, 상업적 사용 목적이 없습니다.

[<img src="https://img.shields.io/badge/프로젝트 기간-2025.08.02~2025.08.13-fab2ac?style=flat&logo=&logoColor=white" />]()

</div> 

## 📝 소개
이 프로젝트는 **React-vite**를 기반으로 제작된 웹사이트입니다.


## 🚀 설치 및 실행 방법

```bash
# 레포지토리 클론
git clone https://github.com/사용자명/레포명.git

# 패키지 설치
npm install

# 로컬 실행
npm run dev
```

## ⚙ 기술 스택

### Basic
<div>
    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css&logoColor=white"> 
    <img src="https://img.shields.io/badge/ecmascript-F7DF1E?style=for-the-badge&logo=ecmascript&logoColor=black">
</div>

### Library
<div>
    <img src="https://img.shields.io/badge/react vite-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img src="https://img.shields.io/badge/gsap-0AE448?style=for-the-badge&logo=gsap&logoColor=black">
    <img src="https://img.shields.io/badge/materialdesign-6750A4?style=for-the-badge&logo=materialdesign&logoColor=black">
    
</div>

### Tools
<div>
    <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=black">
    <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=black">
</div>

## **주요 기능**
### 1. 수평 스크롤 기반 프로젝트 소개 섹션  
- GSAP의 ScrollTrigger를 활용해 세로 스크롤을 가로 스크롤 애니메이션으로 전환  
- 여러 프로젝트 아이템을 가로로 나열하여 자연스러운 좌우 이동 효과 구현  
- 데스크톱과 모바일 환경에 따른 애니메이션 제어 (모바일에서는 애니메이션 비활성화)
- Lenis 라이브러리를 사용해 부드럽고 자연스러운 스크롤링 경험 제공  

### 2. 이미지 로딩 완전 처리  
- 모든 프로젝트 이미지가 완전히 로드된 후에 애니메이션이 시작되도록 구현  
- 이미지 로드 중 발생할 수 있는 레이아웃 깨짐 및 애니메이션 오류 방지

### 3. 반응형 디자인 및 환경 감지  
- `isMobile` prop을 통해 모바일/데스크톱 환경을 감지하여 애니메이션 동작 제어  
- 모바일에서는 스크롤 애니메이션을 비활성화하여 퍼포먼스 최적화

### 4. 안정적인 스크롤 위치 초기화  
- 새로고침 시 브라우저가 스크롤 위치를 복원하는 기본 동작을 수동 제어  
- 항상 페이지 최상단에서 애니메이션이 시작되도록 스크롤 위치 초기화

<br />




<br />

## 🤔 기술적 이슈와 해결 과정

## 1. 새로고침 시 애니메이션 위치 이상 현상

### 문제  
새로고침 후 페이지가 이전 스크롤 위치를 복원하면서   
GSAP ScrollTrigger 애니메이션이 의도와 다르게 동작하는 현상 발생.

### 원인  
브라우저의 기본 스크롤 복원 기능과 ScrollTrigger 초기화 시점 간의 타이밍 불일치.

### 해결 방법  
- `useLayoutEffect`에서 스크롤 복원 기능을 수동으로 제어(`scrollRestoration = 'manual'`)  
- 새로고침 시 `window.scrollTo(0, 0)`으로 스크롤 위치를 최상단으로 고정  
- 모든 이미지가 완전히 로드된 후에 ScrollTrigger를 초기화하도록 구현 (`Promise.all` 사용)

---

## 2. React Ref 배열 관리 문제

### 문제  
`useEffect` 내에서 `ref` 배열을 초기화해 React가 할당한 참조가 사라지고  
 GSAP가 타겟을 제대로 찾지 못하는 현상 발생.

### 원인  
`useEffect` 실행 시 `sectionRef.current = []` 로 배열 초기화 코드를 작성하여  
 렌더링 후 React가 할당한 ref가 사라짐.

### 해결 방법  
- `useEffect`에서 배열 초기화 코드 제거  
- ref 콜백 함수 내에서 요소가 마운트/언마운트 될 때 배열 요소를 적절히 추가/삭제하도록 구현  
- GSAP 타겟 시 항상 `sectionRef.current.filter(Boolean)` 로 유효한 DOM 요소만 사용

---

## 3. 이미지 로드 완료 전 ScrollTrigger 초기화 문제

### 문제  
이미지가 완전히 로드되기 전에 ScrollTrigger가 초기화되어 컨테이너 크기 계산이 부정확함.

### 원인  
이미지 로드 상태를 충분히 확인하지 않고 초기화하여, DOM 크기나 레이아웃이 변경되면서 애니메이션 구간이 틀어짐.

### 해결 방법  
- 모든 이미지 로드 완료 상태를 `Promise.all`로 대기  
- 이미지가 모두 로드된 후 ScrollTrigger 초기화 실행  
- 이미지 로드 실패 시에도 정상 동작하도록 에러 핸들링 포함

---

## 4. overflow-x: hidden 으로 인한 이미지 잘림 문제

### 문제  
`project` 섹션에 `overflow-x: hidden`을 걸면, 애니메이션 시작 전 영역 밖에 있는 이미지가 잘려 보임.

### 원인  
부모 컨테이너가 자식 요소의 가로 넘침을 숨겨서 애니메이션 시작 전 이미지 일부가 보이지 않음.

### 해결 방법  
- 최상위 컨테이너에만 `overflow-x: hidden` 적용  
- `project` 섹션과 애니메이션 컨테이너는 `overflow-x: visible`로 설정  
- `.project_wrap` 등 애니메이션 컨테이너의 너비를 `(100vw * 섹션 개수)` 만큼 충분히 넓혀서 가로로 자연스럽게 펼쳐지도록 조정

---

# 요약표

| 이슈                          | 원인                                            | 해결 방안                                                  |
|------------------------------|-------------------------------------------------|------------------------------------------------------------|
| 새로고침 시 애니메이션 탈출  | 브라우저 스크롤 복원과 ScrollTrigger 초기화 타이밍 불일치 | `scrollRestoration = manual` + `scrollTo(0,0)` + 이미지 완전 로드 후 초기화 |
| React `ref` 배열 꼬임         | `useEffect` 내 배열 초기화로 React ref 사라짐           | `useEffect`에서 초기화 제거, ref 콜백으로 배열 관리               |
| 이미지 로드 미완료 상태 초기화 | 이미지 완전 로드 전 ScrollTrigger 초기화              | `Promise.all`로 이미지 로드 대기 후 초기화                       |
| overflow-x: hidden로 이미지 잘림 | 부모 컨테이너가 자식 콘텐츠 가로 넘침 숨김               | 최상위 컨테이너에만 `overflow-x: hidden` 적용, 내부 컨테이너는 `visible` |

---




