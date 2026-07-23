<div align="center">

# 🫧 Bubble Mate

### 프리미엄 디테일링 세차 용품 쇼핑몰

<br>

<img src="img_001/aston_martin.png" alt="Bubble Mate Hero" width="100%" style="border-radius: 12px;" />

<br>

**프로페셔널 디테일러가 선택한 프리미엄 카케어 용품 전문 플랫폼**

Vanilla JavaScript로 구현한 실전형 풀스택 쇼핑몰 포트폴리오

<br>

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-Bubble_Mate-2563eb?style=for-the-badge)](https://wlsgns9607-blip.github.io/Bubble_Mate/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/wlsgns9607-blip/Bubble_Mate)

</div>

---

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [배포 링크](#-배포-링크)
- [기술 스택](#-기술-스택)
- [핵심 기능](#-핵심-기능)
- [프로젝트 구조](#-프로젝트-구조)
- [반응형 디자인](#-반응형-디자인)
- [트러블 슈팅](#-트러블-슈팅)
- [실행 방법](#-실행-방법)

---

## 🎯 프로젝트 소개

**Bubble Mate**는 디테일링 세차 전문가와 세차 애호가를 위한 **프리미엄 카케어(Car Care) 용품 전문 온라인 쇼핑몰**입니다.

> 별도의 프레임워크 없이 **바닐라 자바스크립트(Vanilla JS)** 만으로 현대적인 프론트엔드 UI/UX를 구현하였으며,  
> **Toss Payments 결제 연동**, **소셜 로그인(Google · Naver · Kakao)**, **관리자 대시보드**까지 갖춘  
> **실무 지향형 포트폴리오** 프로젝트입니다.

### 왜 이 프로젝트인가?

| 관점 | 내용 |
|------|------|
| 🎨 **디자인** | 피그마 기반 민트+파랑 컬러 시스템, 마이크로 인터랙션, 스켈레톤 UI |
| ⚙️ **기술력** | OAuth 2.0 소셜 로그인 3종, 실결제 API 연동, SPA 라우팅 |
| 📱 **반응형** | 갤럭시 폴드(280px) ~ 4K 데스크탑까지 5단계 브레이크포인트 |
| 🏢 **실무 감각** | 관리자 CRUD, 주문 연동, 상품 검색, 장바구니 상태 관리 |

---

## 🔗 배포 링크

| 페이지 | URL |
|--------|-----|
| 🛒 **쇼핑몰 메인** | [https://wlsgns9607-blip.github.io/Bubble_Mate/](https://wlsgns9607-blip.github.io/Bubble_Mate/) |
| 🔐 **관리자 대시보드** | [https://wlsgns9607-blip.github.io/Bubble_Mate/admin.html](https://wlsgns9607-blip.github.io/Bubble_Mate/admin.html) |

---

## 🛠 기술 스택

### Frontend
| 기술 | 설명 |
|------|------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | 시맨틱 HTML5 마크업, SEO 최적화 |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Custom CSS (Flexbox/Grid), 5단계 반응형, CSS 애니메이션 |
| ![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Vanilla JS, DOM 조작, 이벤트 위임, localStorage 상태 관리 |

### API & SDK
| 기술 | 설명 |
|------|------|
| ![Toss](https://img.shields.io/badge/Toss_Payments-0064FF?style=flat-square&logoColor=white) | 카드 결제 모듈 연동 (테스트 모드) |
| ![Google](https://img.shields.io/badge/Google_OAuth-4285F4?style=flat-square&logo=google&logoColor=white) | Google OAuth 2.0 Implicit Flow |
| ![Naver](https://img.shields.io/badge/Naver_Login-03C75A?style=flat-square&logoColor=white) | Naver Login SDK 2.0 (팝업 모드) |
| ![Kakao](https://img.shields.io/badge/Kakao_Login-FEE500?style=flat-square&logoColor=black) | Kakao JavaScript SDK |

### Tools
| 기술 | 설명 |
|------|------|
| ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white) | 관리자 대시보드 매출 차트 |
| ![Confetti](https://img.shields.io/badge/Canvas_Confetti-FFD700?style=flat-square) | 회원가입 축하 효과 |
| ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white) | 정적 사이트 배포 |

---

## ✨ 핵심 기능

### 1. 🎠 동적 히어로 캐러셀 & 이벤트 슬라이더

<img src="img_001/g90.jpg" alt="히어로 배너" width="60%" />

- 자동/수동 슬라이드 전환 (5.5초 간격)
- 이벤트 카드 무한 루프 슬라이더 (복제 카드 트릭)
- 전문가용 세차용품 4개 단위 페이지 스크롤
- 마우스 호버 시 자동 슬라이드 일시 정지

### 2. 🔐 소셜 로그인 (Google · Naver · Kakao)
- **Google**: OAuth 2.0 Implicit Flow → 프로필 API로 사용자명 획득
- **Naver**: Naver Login SDK 2.0 팝업 모드 → `window.opener`로 부모 창 동기화
- **Kakao**: Kakao JavaScript SDK → `Kakao.Auth.login()` 호출
- 로그인 후 헤더 UI 자동 전환 (로그인 버튼 → 사용자명 + 로그아웃)

### 3. 💳 Toss Payments 실결제 연동
- 토스 페이먼츠 SDK를 통한 카드 결제 플로우
- 결제 성공 → 주문 데이터 localStorage 저장 → 관리자 대시보드 실시간 반영
- 결제 취소/실패 시 토스트 알림 처리

### 4. 🛒 장바구니 시스템
- localStorage 기반 상태 관리
- 장바구니 드로어(Drawer) UI — 슬라이드 인/아웃 애니메이션
- 실시간 뱃지 카운터 동기화
- 장바구니에서 바로 토스 결제 연동

### 5. 🔍 실시간 상품 검색
- 검색어 입력 시 상품명/브랜드/카테고리 기준 즉시 필터링
- 검색 결과 0건 시 빈 상태 안내 UI
- 검색 중 상세 페이지에 있으면 자동으로 홈 복귀

### 6. 📦 상품 상세 페이지
- 스켈레톤 UI → 실제 콘텐츠 전환 (0.6초 로딩 시뮬레이션)
- 이미지 갤러리 (메인 + 썸네일 3개)
- 주요 특징, 사용 방법 (타임라인 UI)
- 탭 UI (상세정보 / 리뷰 / Q&A / 반품교환)
- 스크롤 시 스티키 구매 바 표시

### 7. 🎉 회원가입 & 쿠폰 발급
- 6단계 입력 폼 (성명/생년월일/전화번호/차종/아이디/비밀번호)
- 비밀번호 특수문자 필수 검증
- 가입 완료 시: 🎊 컨페티 효과 + 10,000원 쿠폰 모달

### 8. 📊 관리자 대시보드 (`admin.html`)
- 로그인 보호 (세션 기반 인증)
- 매출 현황 / 주문 수 실시간 통계 카드
- Chart.js 일별 매출 추이 차트
- 최근 주문 내역 테이블
- 상품 CRUD (추가/수정/삭제 + 이미지 업로드)

---

## 📁 프로젝트 구조

```
Bubble_Mate/
├── index.html          # 메인 쇼핑몰 (홈 + 상세 SPA)
├── admin.html          # 관리자 대시보드
├── style.css           # 메인 스타일 (반응형 5단계 포함)
├── admin.css           # 관리자 페이지 스타일
├── app.js              # 메인 앱 로직 (1,448줄)
├── products.js         # 상품 데이터 (20개 상품)
├── admin.js            # 관리자 CRUD & 차트
├── img_001/            # 상품/리뷰/배너 이미지 (40개)
└── README.md           # 이 문서
```

---

## 📱 반응형 디자인

5단계 브레이크포인트로 모든 기기에 대응합니다.

| 브레이크포인트 | 대상 기기 | 주요 변화 |
|:---:|:---|:---|
| `≤1000px` | iPad, 태블릿 | 네비 숨김, 2열 상품, 이벤트 카드 축소 |
| `≤768px` | iPad Mini | 스켈레톤 세로 배치 |
| `≤640px` | iPhone, 일반 모바일 | 검색창 풀너비, 1열 리뷰, 옵션 슬라이드업 |
| `≤420px` | Galaxy Flip, 소형폰 | 전체 축소, 카테고리 3x3, 히어로 280px |
| `≤300px` | Galaxy Fold (접힘) | 상품 1열, 극소 타이포, 뉴스레터 세로 |

---

## 💣 트러블 슈팅

### 1. 이벤트 슬라이더 끊김 → 무한 루프 트릭
- **문제**: 슬라이더가 끝에 도달하면 맨 앞으로 돌아갈 때 화면이 뚝 끊기는 현상
- **해결**: 복제 카드를 끝에 배치 → `scroll-behavior: auto`로 몰래 롤백 → 다시 `smooth` 전환
  
### 2. 장바구니 뱃지 동기화 이슈
- **문제**: 드로어에서 상품 삭제 시 헤더 뱃지가 새로고침 없이 반영 안 됨
- **해결**: 데이터 조작 함수(`saveCart`) 내부에서 항상 `updateCartBadge()` 호출 (단방향 데이터 흐름)

### 3. Toss 결제창 z-index 충돌
- **문제**: 옵션 시트 위에 토스 결제 iframe이 가려지는 현상
- **해결**: `requestPayment` 호출 전 `closeOptionSheet()` 선행 실행

### 4. OAuth Redirect URI 불일치
- **문제**: 로컬(127.0.0.1)과 배포(GitHub Pages) 환경에서 소셜 로그인 실패
- **해결**: `getCallbackUrl()` 함수로 현재 환경에 맞는 동적 Redirect URI 생성

### 5. 로그인 시 부자연스러운 alert 팝업
- **문제**: 브라우저 기본 `alert()`가 앱 디자인과 이질적
- **해결**: 모든 `alert()`를 앱 내 `showToast()` 커스텀 알림으로 교체

---

## 🚀 실행 방법

```bash
# 1. 레포지토리 클론
git clone https://github.com/wlsgns9607-blip/Bubble_Mate.git

# 2. 폴더 이동
cd Bubble_Mate

# 3. 로컬 서버 실행
npx -y http-server -p 8080 -c-1 --cors -o
```

| 페이지 | URL |
|--------|-----|
| 쇼핑몰 홈 | `http://localhost:8080` |
| 관리자 페이지 | `http://localhost:8080/admin.html` |

> ⚠️ **참고**: 소셜 로그인(Google/Naver/Kakao)은 OAuth Redirect URI가 GitHub Pages URL로 등록되어 있어, **배포 환경에서만** 정상 동작합니다.

---

<div align="center">

### 📬 Contact

**조진훈** · wlsgns1996@naver.com

<br>

*포트폴리오 검토를 위해 방문해 주셔서 감사합니다.* 🙇‍♂️

</div>

