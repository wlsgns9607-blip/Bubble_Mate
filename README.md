# 🫧 Bubble Mate (버블메이트) - 프리미엄 세차 용품 쇼핑몰

![Bubble Mate Banner](https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80)

> **Bubble Mate**는 디테일링 세차 전문가와 세차 애호가를 위한 프리미엄 카케어(Car Care) 용품 전문 온라인 쇼핑몰입니다. 
> 바닐라 자바스크립트(Vanilla JS)만으로 현대적인 프론트엔드 UI/UX를 구현하였으며, Toss Payments 연동을 통해 실제 결제 프로세스를 경험할 수 있는 실무 지향형 포트폴리오 프로젝트입니다.

---

## 🔗 배포 주소 (Live Demo)
👉 **[Bubble Mate 쇼핑몰 바로가기](https://wlsgns9607-blip.github.io/Bubble_Mate/)** *(배포 후 활성화됩니다)*

---

## 🛠 사용 기술 (Tech Stack)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **API Integration**: Toss Payments SDK
- **Data Management**: 브라우저 Local Storage
- **Design/UI**: Custom CSS (Flexbox/Grid), 반응형 웹 디자인, 마이크로 인터랙션

---

## ✨ 핵심 기능 및 시연 (Key Features)

### 1. 반응형 메인 UI & 동적 캐러셀 슬라이더
- `window.requestAnimationFrame`과 CSS Transitions를 활용해 부드러운 히어로 배너 슬라이더 및 이벤트 슬라이더 구현.
- 모바일, 태블릿, 데스크탑을 아우르는 완벽한 반응형(Responsive) 웹 디자인 채택.
*(여기에 메인 화면 스크롤 GIF 추가)*

### 2. Toss Payments 결제 모듈 연동
- 토스 페이먼츠 결제 위젯을 연동하여, 상품 상세 페이지의 옵션 시트에서 실제 카드 결제 플로우를 모의로 진행할 수 있습니다.
*(여기에 결제창 뜨는 GIF 추가)*

### 3. 로컬 스토리지 기반 '장바구니' 시스템
- 별도의 백엔드 없이 **브라우저 Local Storage**를 활용해 상태(State)를 관리합니다.
- 장바구니 담기, 장바구니 드로어(Drawer)에서 상품 확인 및 삭제 시 우측 상단 뱃지 카운터가 실시간으로 동기화됩니다.
*(여기에 장바구니 담는 GIF 추가)*

### 4. B2B 관리자 대시보드 (`admin.html`)
- 쇼핑몰 관리자를 위한 별도의 대시보드 페이지 구축.
- 매출 현황, 신규 주문, 최근 주문 테이블 등을 시각적으로 깔끔하게 제공합니다.
*(여기에 관리자 페이지 스크린샷 추가)*

---

## 💣 트러블 슈팅 (Troubleshooting)

### 1. 이벤트 슬라이더의 끊김 현상과 UX 개선
- **문제**: 이벤트 카드 슬라이더가 100% 끝에 도달했을 때 맨 앞으로 돌아가는 과정에서 화면이 뚝 끊기듯 이동하여 UX가 저하되는 현상 발생.
- **해결**: 복제된 카드를 맨 끝에 배치하여 무한 루프처럼 보이게 하는 트릭(Infinite Carousel)을 적용. 스크롤 위치가 끝부분의 복제 카드에 도달하면 애니메이션 효과(`scroll-behavior: auto`)를 끄고 몰래 실제 첫 번째 카드로 위치를 롤백시킨 뒤, 다시 `smooth` 속성을 부여하는 방식으로 부드러운 스와이프 UX를 완성했습니다.

### 2. 순수 JS에서의 장바구니 상태(State) 동기화 문제
- **문제**: 장바구니 서랍(Drawer)에서 상품을 삭제했을 때, 헤더에 있는 '장바구니 뱃지 숫자'가 새로고침을 해야만 반영되는 동기화 이슈 발생.
- **해결**: 데이터를 조작하는 공통 함수(`saveCart`, `addToCart`) 내부에서 데이터를 Local Storage에 저장한 직후 무조건 `updateCartBadge()` 함수를 호출하도록 설계(단방향 데이터 흐름과 유사한 패턴 적용). 이를 통해 UI 컴포넌트 간의 상태 불일치를 해결했습니다.

### 3. Toss Payments 연동 시 모달/오버레이 중첩 충돌
- **문제**: 하단 옵션 시트(Option Sheet)가 열려있는 상태에서 토스 결제창(Iframe)을 호출할 때, `z-index` 충돌로 결제창이 가려지거나 클릭이 안 되는 이슈.
- **해결**: 결제 API 호출(`requestPayment`) 직전에 `closeOptionSheet()` 함수를 먼저 실행하여 배경 오버레이를 닫아 DOM의 최상단 포커스를 토스 결제창으로 넘겨줌으로써 해결했습니다.

---

## 🚀 프로젝트 실행 방법

```bash
# 레포지토리 클론
git clone https://github.com/wlsgns9607-blip/Bubble_Mate.git

# 폴더 이동
cd Bubble_Mate

# 로컬 서버 실행 (Node.js 환경)
npx serve -l 3000
```
- 브라우저에서 `http://localhost:3000` 접속 시 홈 화면 확인
- `http://localhost:3000/admin.html` 접속 시 관리자 화면 확인

---
*포트폴리오 검토를 위해 방문해 주셔서 감사합니다.* 🙇‍♂️
