/* =========================================================
   Bubble Mate — 동작 스크립트
   ========================================================= */

/* ---------- 유틸 ---------- */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const won = (n) => n.toLocaleString("ko-KR") + "원";

/* ---------- 로컬 스토리지 ---------- */
function getCart() { return JSON.parse(localStorage.getItem('bubble_cart') || '[]'); }
function saveCart(cart) {
  localStorage.setItem('bubble_cart', JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(item) {
  const cart = getCart();
  cart.push(item);
  saveCart(cart);
  showToast("장바구니에 담겼습니다.");
}
function updateCartBadge() {
  const cart = getCart();
  const badge = $("#cartBadge");
  if (badge) {
    if (cart.length > 0) {
      badge.hidden = false;
      badge.textContent = cart.length > 99 ? "99+" : cart.length;
    } else {
      badge.hidden = true;
    }
  }
}

function openCartDrawer() {
  renderCartItems();
  $("#cartOverlay").hidden = false;
  $("#cartDrawer").hidden = false;
  requestAnimationFrame(() => {
    $("#cartDrawer").classList.add("open");
  });
}

function closeCartDrawer() {
  $("#cartDrawer").classList.remove("open");
  setTimeout(() => {
    $("#cartOverlay").hidden = true;
    $("#cartDrawer").hidden = true;
  }, 300);
}

function renderCartItems() {
  const cart = getCart();
  const body = $("#cartBody");
  const totalEl = $("#cartTotalPrice");
  body.innerHTML = "";
  
  if (cart.length === 0) {
    body.innerHTML = '<p class="cart-empty">장바구니가 비어 있습니다.</p>';
    totalEl.textContent = "0원";
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.qty;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="cart-item-info">
        <span class="cart-item-name">${item.name} <span style="color:#64748b; font-weight:400; margin-left:4px;">x${item.qty}</span></span>
        <span class="cart-item-vol">옵션: ${item.volume}</span>
        <span class="cart-item-price">${won(item.price * item.qty)}</span>
      </div>
      <span class="cart-item-del" data-index="${index}">삭제</span>
    `;
    body.appendChild(div);
  });

  $$(".cart-item-del", body).forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.getAttribute("data-index");
      cart.splice(idx, 1);
      saveCart(cart);
      renderCartItems();
    });
  });

  totalEl.textContent = won(total);
}

function checkLoginStatus() {
  const user = JSON.parse(localStorage.getItem('bubble_user'));
  const loginBtn = $("#headerLoginBtn") || $(".login-btn");
  const userProfile = $("#userProfile");
  const userNameText = $("#userNameText");

  if (user && user.name) {
    if (loginBtn) loginBtn.style.display = "none";
    if (userProfile) userProfile.style.display = "flex";
    if (userNameText) userNameText.textContent = user.name;
  } else {
    if (loginBtn) loginBtn.style.display = "inline-flex";
    if (userProfile) userProfile.style.display = "none";
    if (userNameText) userNameText.textContent = "";
  }
}

function simulateLogin(username) {
  localStorage.setItem('bubble_user', JSON.stringify({ name: username }));
  checkLoginStatus();
  showToast(username + "님 환영합니다!");
  closeLoginModal();
}

function simulateLogout() {
  localStorage.removeItem('bubble_user');
  checkLoginStatus();
  showToast("로그아웃 되었습니다.");
}

function recordRecentView(productId) {
  let recent = JSON.parse(localStorage.getItem('bubble_recent') || '[]');
  recent = recent.filter(id => id !== productId);
  recent.unshift(productId);
  if (recent.length > 10) recent.pop();
  localStorage.setItem('bubble_recent', JSON.stringify(recent));
}

// 사진이 아직 없으므로 alt 안내문을 보여주는 placeholder 박스를 만든다.
// (나중에 실제 <img src="..."> 를 넣으면 이 함수 대신 진짜 이미지가 들어감)
function phImage(alt, extraClass = "", src = "") {
  if (src) {
    const img = document.createElement("img");
    img.className = extraClass;
    img.src = src;
    img.alt = alt;
    return img;
  }
  const div = document.createElement("div");
  div.className = "img-ph " + extraClass;
  div.textContent = alt;
  div.setAttribute("role", "img");
  div.setAttribute("aria-label", alt);
  return div;
}

/* 별점 문자열 (꽉찬 별 + 빈 별) */
function starString(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

/* =========================================================
   1) 히어로 캐러셀 — 박스 안 이미지+텍스트만 슬라이드
   ========================================================= */
let heroIndex = 0;
let heroTimer = null;

function buildHero() {
  const track = $("#heroTrack");
  const dots  = $("#heroDots");
  track.innerHTML = "";
  dots.innerHTML  = "";

  HERO_SLIDES.forEach((slide, i) => {
    const el = document.createElement("div");
    el.className = "hero-slide" + (i === 0 ? " active" : "");

    // 배경 이미지 (실제 이미지 혹은 placeholder)
    if (slide.src) {
      const img = document.createElement("img");
      img.className = "hero-slide-bg";
      img.src = slide.src;
      img.alt = slide.alt;
      el.appendChild(img);
    } else {
      el.appendChild(phImage(slide.alt, "hero-slide-bg"));
    }

    // 어두운 오버레이
    const overlay = document.createElement("div");
    overlay.className = "hero-overlay";
    el.appendChild(overlay);

    // 텍스트 콘텐츠
    const content = document.createElement("div");
    content.className = "hero-content";
    content.innerHTML = `
      <span class="hero-badge">${slide.badge}</span>
      <h2 class="hero-title">${slide.title.join("<br>")}</h2>
      <p class="hero-desc">${slide.desc}</p>
      <button class="hero-cta">${slide.cta} →</button>
    `;
    el.appendChild(content);
    track.appendChild(el);

    // 점(dot)
    const dot = document.createElement("span");
    dot.className = "hero-dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goHero(i));
    dots.appendChild(dot);
  });
}

function goHero(i) {
  const slides = $$(".hero-slide");
  const dots   = $$(".hero-dot");
  heroIndex = (i + slides.length) % slides.length;
  slides.forEach((s, idx) => s.classList.toggle("active", idx === heroIndex));
  dots.forEach((d, idx) => d.classList.toggle("active", idx === heroIndex));
  resetHeroTimer();
}
function nextHero() { goHero(heroIndex + 1); }
function prevHero() { goHero(heroIndex - 1); }

function resetHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(nextHero, 5500);
}

/* =========================================================
   2) 카테고리 렌더링
   ========================================================= */
function buildCategories() {
  const list = $("#categoryList");
  list.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const li = document.createElement("li");
    li.className = "category-item";
    li.innerHTML = `
      <span class="category-icon">
        <svg viewBox="0 0 24 24"><path d="${cat.icon}"/></svg>
      </span>
      <span class="category-label">${cat.label}</span>
    `;
    li.addEventListener("click", () => {
      alert("카테고리 상품 준비 중입니다.");
    });
    list.appendChild(li);
  });
}

/* =========================================================
   3) 인기상품 카드 8개 렌더링
   ========================================================= */
function buildProducts() {
  const grid = $("#productGrid");
  grid.innerHTML = "";

  PRODUCTS.slice(0, 8).forEach((p) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const thumb = document.createElement("div");
    thumb.className = "product-thumb";
    thumb.appendChild(phImage(p.mainAlt, "", p.mainSrc));

    // 찜 버튼
    const wish = document.createElement("button");
    wish.className = "wish-btn";
    wish.setAttribute("aria-label", "찜하기");
    wish.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>`;
    wish.addEventListener("click", (e) => {
      e.stopPropagation();            // 카드 클릭(상세 이동) 막기
      wish.classList.toggle("on");
    });
    thumb.appendChild(wish);

    const body = document.createElement("div");
    body.className = "product-body";
    body.innerHTML = `
      <p class="product-brand">${p.brand}</p>
      <p class="product-name">${p.name}</p>
      <div class="product-price-row">
        <span class="product-discount">${p.discount}%</span>
        <span class="product-price">${won(p.price)}</span>
      </div>
      <div class="product-rating">
        <span class="star">★</span> ${p.rating} <span>(${p.ratingCount.toLocaleString()})</span>
      </div>
    `;

    card.appendChild(thumb);
    card.appendChild(body);

    // 카드 클릭 → 상세페이지로 (찜 버튼 제외)
    card.addEventListener("click", () => openDetail(p.id));

    grid.appendChild(card);
  });
}

/* =========================================================
   4) 리뷰 렌더링
   ========================================================= */
function buildReviews() {
  const grid = $("#reviewGrid");
  grid.innerHTML = "";
  REVIEWS.forEach(r => {
    const item = document.createElement("div");
    item.className = "review-item";
    
    // 실제 이미지 또는 placeholder
    if (r.src) {
      const img = document.createElement("img");
      img.src = r.src;
      img.alt = r.alt;
      item.appendChild(img);
    } else {
      item.appendChild(phImage(r.alt));
    }
    
    const stars = document.createElement("div");
    stars.className = "review-stars";
    stars.textContent = "★".repeat(r.stars);
    item.appendChild(stars);

    if (r.text) {
      const text = document.createElement("p");
      text.className = "review-text";
      text.textContent = r.text;
      item.appendChild(text);
    }

    grid.appendChild(item);
  });
}

/* =========================================================
   5) 화면 전환 (홈 ↔ 상세) — 방식 B
   ========================================================= */
let currentProduct = null;
let detailQty = 1;

function openDetail(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  currentProduct = p;
  detailQty = 1;

  $("#homeView").hidden = true;
  $("#detailView").hidden = false;
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

  // 스켈레톤 UI 노출
  const skeletonView = $("#skeletonView");
  const realContent = $("#realDetailContent");
  if (skeletonView && realContent) {
    skeletonView.hidden = false;
    realContent.hidden = true;
  }

  // 비동기 데이터 통신을 가장한 로딩 딜레이 (0.6초)
  setTimeout(() => {
    renderDetail(p);
    recordRecentView(productId);
    
    if (skeletonView && realContent) {
      skeletonView.hidden = true;
      realContent.hidden = false;
    }
  }, 600);

  // 주소 해시로 뒤로가기 지원
  history.pushState({ view: "detail", id: productId }, "", "#product=" + productId);
}

function goHome() {
  $("#detailView").hidden = true;
  $("#homeView").hidden = false;
  closeOptionSheet();
  window.scrollTo({ top: 0 });
  if (location.hash) history.pushState({ view: "home" }, "", location.pathname);
}

/* 상세페이지 내용 채우기 (상품마다 전부 바뀜) */
function renderDetail(p) {
  // 갤러리 메인
  const mainWrap = $("#galleryMain");
  mainWrap.innerHTML = "";
  mainWrap.appendChild(phImage(p.mainAlt, "", p.mainSrc));

  // 마우스 호버 시 돋보기 효과 이벤트 바인딩
  mainWrap.addEventListener("mousemove", (e) => {
    const rect = mainWrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // 백분율로 환산 (transform-origin 설정용)
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    
    const img = mainWrap.querySelector("img");
    if (img) {
      mainWrap.classList.add("zooming");
      img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    }
  });

  mainWrap.addEventListener("mouseleave", () => {
    mainWrap.classList.remove("zooming");
    const img = mainWrap.querySelector("img");
    if (img) img.style.transformOrigin = "center center";
  });

  // 썸네일
  const thumbs = $("#galleryThumbs");
  thumbs.innerHTML = "";
  const allThumbAlts = [p.mainAlt, ...p.thumbs];
  
  // 랜덤 이미지 풀 (디테일 썸네일용)
  const randomThumbs = [
    "img_001/Review_001.jpg",
    "img_001/Review_002.png",
    "img_001/Review_003.jpg",
    "img_001/dark-ace-studios-AWJWSfH1ozk-unsplash.jpg",
    p.mainSrc
  ];

  allThumbAlts.slice(0, 3).forEach((alt, i) => {
    const t = document.createElement("div");
    t.className = "gallery-thumb" + (i === 0 ? " active" : "");
    
    // 첫번째는 메인 이미지, 나머지는 랜덤 풀에서 할당 (고정된 순서로)
    const thumbSrc = i === 0 ? p.mainSrc : randomThumbs[i % randomThumbs.length];
    
    t.appendChild(phImage(alt, "", thumbSrc));
    t.addEventListener("click", () => {
      $$(".gallery-thumb").forEach(x => x.classList.remove("active"));
      t.classList.add("active");
      mainWrap.innerHTML = "";
      mainWrap.appendChild(phImage(alt, "", thumbSrc));
    });
    thumbs.appendChild(t);
  });

  // 텍스트 정보
  $("#detailBrand").textContent       = p.brand;
  $("#detailName").textContent        = p.name;
  $("#detailStars").textContent       = starString(p.rating);
  $("#detailRatingNum").textContent   = p.rating;
  $("#detailRatingCount").textContent = `(${p.ratingCount.toLocaleString()})`;
  $("#detailDiscount").textContent    = p.discount + "%";
  $("#detailPrice").textContent       = p.price.toLocaleString() + " KRW";

  const origin = Math.round(p.price / (1 - p.discount / 100));
  $("#detailOrigin").textContent = origin.toLocaleString() + " KRW";

  // 스티키 바 업데이트
  const stickyName = $("#stickyName");
  const stickyPrice = $("#stickyPrice");
  if (stickyName) stickyName.textContent = p.name;
  if (stickyPrice) stickyPrice.textContent = p.price.toLocaleString() + " KRW";

  $("#detailTip").textContent = p.tip;

  // 수량 리셋
  $("#qtyValue").textContent = detailQty;

  // 주요 특징
  const fg = $("#featureGrid");
  fg.innerHTML = "";
  p.features.forEach(f => {
    const card = document.createElement("div");
    card.className = "feature-card";
    card.innerHTML = `
      <div class="feature-icon">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>
      </div>
      <div class="feature-text">
        <h3>${f.title}</h3>
        <p>${f.body}</p>
      </div>
    `;
    fg.appendChild(card);
  });

  // 사용 방법
  const steps = $("#stepsList");
  steps.innerHTML = "";
  p.steps.forEach((s, i) => {
    const li = document.createElement("li");
    li.className = "step";
    li.innerHTML = `
      <span class="step-num">0${i + 1}</span>
      <div class="step-card">
        <h3>${s.title}</h3>
        <p>${s.body}</p>
      </div>
    `;
    steps.appendChild(li);
  });
}

/* =========================================================
   6) 수량 조절 (상세페이지)
   ========================================================= */
function bindDetailQty() {
  $("#qtyMinus").addEventListener("click", () => {
    detailQty = Math.max(1, detailQty - 1);
    $("#qtyValue").textContent = detailQty;
  });
  $("#qtyPlus").addEventListener("click", () => {
    detailQty++;
    $("#qtyValue").textContent = detailQty;
  });
}

/* =========================================================
   7) 옵션 슬라이드업 (구매하기) + 토스페이
   ========================================================= */
let sheetVolumeIdx = 0;
let sheetQty = 1;

function openOptionSheet() {
  if (!currentProduct) return;
  sheetVolumeIdx = 0;
  sheetQty = detailQty;

  $("#optionProduct").textContent = currentProduct.name;

  // 용량 칩
  const chips = $("#optionChips");
  chips.innerHTML = "";
  VOLUME_OPTIONS.forEach((v, i) => {
    const chip = document.createElement("button");
    chip.className = "option-chip" + (i === 0 ? " active" : "");
    chip.textContent = v.label;
    chip.addEventListener("click", () => {
      sheetVolumeIdx = i;
      $$(".option-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      updateOptionTotal();
    });
    chips.appendChild(chip);
  });

  $("#sheetQty").textContent = sheetQty;
  updateOptionTotal();

  $("#optionOverlay").hidden = false;
  $("#optionSheet").hidden = false;
}

function closeOptionSheet() {
  $("#optionOverlay").hidden = true;
  $("#optionSheet").hidden = true;
}

function updateOptionTotal() {
  const base = currentProduct.price + VOLUME_OPTIONS[sheetVolumeIdx].add;
  $("#optionTotal").textContent = won(base * sheetQty);
}

function bindOptionSheet() {
  $("#sheetMinus").addEventListener("click", () => {
    sheetQty = Math.max(1, sheetQty - 1);
    $("#sheetQty").textContent = sheetQty;
    updateOptionTotal();
  });
  $("#sheetPlus").addEventListener("click", () => {
    sheetQty++;
    $("#sheetQty").textContent = sheetQty;
    updateOptionTotal();
  });
  $("#optionClose").addEventListener("click", closeOptionSheet);
  $("#optionOverlay").addEventListener("click", closeOptionSheet);
  
  const addCartBtn = $("#addCartBtn");
  if (addCartBtn) {
    addCartBtn.addEventListener("click", () => {
      if (!currentProduct) return;
      addToCart({
        id: currentProduct.id,
        name: currentProduct.name,
        qty: sheetQty,
        volume: VOLUME_OPTIONS[sheetVolumeIdx].label,
        price: currentProduct.price + VOLUME_OPTIONS[sheetVolumeIdx].add
      });
      closeOptionSheet();
    });
  }

  $("#tossBtn").addEventListener("click", () => {
    const base = currentProduct.price + VOLUME_OPTIONS[sheetVolumeIdx].add;
    const amount = base * sheetQty;
    const orderId = "order_" + new Date().getTime() + "_" + Math.floor(Math.random() * 1000);
    const orderName = currentProduct.name + " (" + VOLUME_OPTIONS[sheetVolumeIdx].label + ")";

    closeOptionSheet();
    
    try {
      // 1. 토스페이먼츠 객체 초기화 (제공된 테스트 API 키)
      const tossPayments = TossPayments("test_ck_Z1aOwX7K8mEZMmB0obdj8yQxzvNP");
      
      // 2. 결제창 띄우기 (카드 결제)
      tossPayments.requestPayment('카드', {
        amount: amount,
        orderId: orderId,
        orderName: orderName,
        customerName: '테스트고객',
        successUrl: window.location.origin + window.location.pathname + '?success=true&amount=' + amount + '&orderName=' + encodeURIComponent(orderName),
        failUrl: window.location.origin + window.location.pathname + '?fail=true',
      }).catch(function (error) {
        if (error.code === 'USER_CANCEL') {
          showToast('결제가 취소되었습니다.');
        } else {
          showToast('결제 중 오류가 발생했습니다: ' + error.message);
        }
      });
    } catch (e) {
      console.error(e);
      showToast('결제 모듈 로드 중 오류가 발생했습니다.');
    }
  });
}

/* =========================================================
   8) 토스트 메시지
   ========================================================= */
let toastTimer = null;
function showToast(msg) {
  let t = $(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* =========================================================
   9) 전역 이벤트 바인딩
   ========================================================= */
function bindGlobal() {
  // 히어로 화살표
  $("#heroPrev").addEventListener("click", prevHero);
  $("#heroNext").addEventListener("click", nextHero);

  // 로고 → 홈
  $("#logoHome").addEventListener("click", (e) => { e.preventDefault(); goHome(); });

  // 선물상자 폭죽 이벤트
  const giftBox = $("#giftBox");
  if (giftBox) {
    giftBox.addEventListener("click", () => {
      const rect = giftBox.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      if (typeof confetti === "function") {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { x, y },
          zIndex: 9999
        });
      }
    });
  }

  // 네비게이션 링크 클릭 시 알림
  $$(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert("카테고리 상품 준비 중입니다.");
    });
  });

  // 버튼 공통 이벤트 (이벤트 위임)
  document.addEventListener("click", (e) => {
    if (e.target.closest(".btn-purchase")) openOptionSheet();
    if (e.target.closest(".btn-inquiry"))  showToast("입점사 1:1 문의 채널로 연결합니다.");
    if (e.target.closest(".hero-cta")) alert("상품 준비 중입니다.");
  });

  // 브라우저 뒤로가기 처리
  window.addEventListener("popstate", (e) => {
    const st = e.state;
    if (st && st.view === "detail") {
      openDetailNoPush(st.id);
    } else {
      $("#detailView").hidden = true;
      $("#homeView").hidden = false;
      closeOptionSheet();
    }
  });

  // ESC로 옵션창/모달 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeOptionSheet();
      closeLoginModal();
      closeSignupModal();
    }
  });

  // 탭 스위칭 로직
  $$(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".tab-btn").forEach(b => b.classList.remove("active"));
      $$(".tab-content").forEach(c => c.classList.remove("active"));
      
      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      const targetContent = $("#" + targetId);
      if (targetContent) targetContent.classList.add("active");
    });
  });

  // 스티키 바 버튼
  const stickyBuyBtn = $("#stickyBuyBtn");
  if (stickyBuyBtn) {
    stickyBuyBtn.addEventListener("click", () => {
      openOptionSheet();
    });
  }

  // 스크롤 이벤트 (스티키 바 표시/숨김)
  window.addEventListener("scroll", () => {
    const detailView = $("#detailView");
    const stickyBar = $(".sticky-buy-bar");
    if (!detailView.hidden && stickyBar) {
      if (window.scrollY > 300) {
        stickyBar.classList.add("show");
      } else {
        stickyBar.classList.remove("show");
      }
    }
  });

  // 장바구니 드로어 이벤트
  const cartBtn = $("#cartBtn");
  if (cartBtn) cartBtn.addEventListener("click", openCartDrawer);
  const cartClose = $("#cartClose");
  if (cartClose) cartClose.addEventListener("click", closeCartDrawer);
  const cartOverlay = $("#cartOverlay");
  if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);
  const cartCheckoutBtn = $("#cartCheckoutBtn");
  if (cartCheckoutBtn) cartCheckoutBtn.addEventListener("click", () => {
    if (getCart().length === 0) {
      alert("장바구니가 비어 있습니다.");
      return;
    }
    alert("결제 페이지로 이동합니다. (포트폴리오 데모용)");
  });

  // 로그인 모달 이벤트
  const loginBtn = $("#headerLoginBtn") || $(".login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", openLoginModal);
  }
  const loginSubmitBtn = $("#loginSubmitBtn");
  if (loginSubmitBtn) {
    loginSubmitBtn.addEventListener("click", () => {
      simulateLogin("김철수");
    });
  }
  $$(".social-btn").forEach(btn => {
    btn.addEventListener("click", () => simulateLogin("소셜유저"));
  });
  
  const logoutBtn = $("#logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", simulateLogout);
  }
  const loginClose = $("#loginClose");
  if (loginClose) {
    loginClose.addEventListener("click", closeLoginModal);
  }
  const loginBack = $(".login-back");
  if (loginBack) {
    loginBack.addEventListener("click", closeLoginModal);
  }
  const loginOverlay = $("#loginOverlay");
  if (loginOverlay) {
    loginOverlay.addEventListener("click", () => {
      closeLoginModal();
      closeSignupModal();
    });
  }

  // 회원가입 모달 이벤트
  const signupLink = $(".login-signup-link");
  if (signupLink) {
    signupLink.addEventListener("click", () => {
      closeLoginModal();
      openSignupModal();
    });
  }
  const signupBack = $("#signupBack");
  if (signupBack) {
    signupBack.addEventListener("click", () => {
      closeSignupModal();
      openLoginModal();
    });
  }
}

function openLoginModal() {
  $("#loginOverlay").hidden = false;
  $("#loginModal").hidden = false;
}

function closeLoginModal() {
  $("#loginOverlay").hidden = true;
  $("#loginModal").hidden = true;
}

function openSignupModal() {
  $("#loginOverlay").hidden = false;
  $("#signupModal").hidden = false;
}

function closeSignupModal() {
  $("#signupModal").hidden = true;
}

// 뒤로가기로 상세 복원할 때 (history push 없이)
function openDetailNoPush(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  detailQty = 1;
  renderDetail(p);
  recordRecentView(id);
  $("#homeView").hidden = true;
  $("#detailView").hidden = false;
}

/* =========================================================
   11) 이벤트 슬라이더 스크롤 연동
   ========================================================= */
function bindEventSlider() {
  const track = $("#eventTrack");
  const bar = $("#eventProgressBar");
  if (!track || !bar) return;

  function updateProgress() {
    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) {
      bar.style.transform = `translateX(0)`;
      return;
    }
    const ratio = scrollLeft / maxScroll;
    // progress bar moves from 0 to 400% (since width is 20%)
    bar.style.transform = `translateX(${ratio * 400}%)`;
  }
  
  track.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  
  // Initial check
  setTimeout(updateProgress, 100);

  // 자동 슬라이드 로직
  let autoSlideTimer = setInterval(autoSlide, 3500);
  
  function autoSlide() {
    if (track.scrollWidth - track.clientWidth <= 0) return;
    
    // 카드 1개 너비 계산 (gap 포함 대략)
    const cardWidth = track.children[0].offsetWidth + 24; 
    let nextScroll = track.scrollLeft + cardWidth;

    // 복제된 마지막 카드 너머로 가면 처음으로 몰래 이동 후 다시 부드럽게 스크롤
    if (nextScroll >= track.scrollWidth - track.clientWidth - 10) {
      track.style.scrollBehavior = "auto"; // 애니메이션 끄기
      track.scrollLeft = 0; // 맨 앞으로 
      
      // 약간의 지연 후 부드럽게 스와이프
      setTimeout(() => {
        track.style.scrollBehavior = "smooth";
        track.scrollLeft = cardWidth;
      }, 50);
    } else {
      track.scrollLeft = nextScroll;
    }
  }

  // 마우스 올리면 자동 슬라이드 정지, 내리면 다시 시작
  track.addEventListener("mouseenter", () => clearInterval(autoSlideTimer));
  track.addEventListener("mouseleave", () => {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(autoSlide, 3500);
  });
  track.addEventListener("touchstart", () => clearInterval(autoSlideTimer), { passive: true });
  track.addEventListener("touchend", () => {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(autoSlide, 3500);
  }, { passive: true });

  // 클릭 시 상세페이지(2페이지)로 이동하도록 연결
  const eventCards = $$(".event-card", track);
  eventCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      let productId = "event-bug-cleaner";
      const mod = index % 5;
      if (mod === 0) productId = "event-bug-cleaner";
      else if (mod === 1) productId = "event-interior-cleaner";
      else if (mod === 2) productId = "event-wax-set";
      else if (mod === 3) productId = "event-towel-set";
      else if (mod === 4) productId = "event-alkaline-cleaner";
      
      openDetail(productId);
    });
  });
}

/* =========================================================
   12) 초기화
   ========================================================= */
function init() {
  checkLoginStatus();
  updateCartBadge();
  buildHero();
  buildCategories();
  buildProducts();
  buildReviews();
  bindDetailQty();
  bindOptionSheet();
  bindGlobal();
  bindEventSlider();
  resetHeroTimer();

  // 주소에 #product=... 있으면 해당 상세로 바로 진입
  const m = location.hash.match(/product=([\w-]+)/);
  if (m) openDetailNoPush(m[1]);

  // 결제 완료 처리
  const params = new URLSearchParams(window.location.search);
  if (params.get("success") === "true") {
    const amount = parseInt(params.get("amount") || "0");
    const orderName = params.get("orderName") || "주문상품";
    const orderId = params.get("orderId") || "ORD-" + Math.floor(Math.random()*10000);
    
    const orders = JSON.parse(localStorage.getItem("bubble_orders") || "[]");
    orders.unshift({
      orderId: orderId,
      customerName: "테스트고객",
      orderName: orderName,
      date: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
      amount: amount,
      status: "배송 준비"
    });
    localStorage.setItem("bubble_orders", JSON.stringify(orders));

    setTimeout(() => showToast("결제가 완료되었습니다! 어드민에서 확인해보세요."), 500);
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}

document.addEventListener("DOMContentLoaded", init);
