// admin.js

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".sidebar-nav .nav-item");
  const dashboardContent = document.querySelector(".dashboard-content");
  const productManagementContent = document.getElementById("productManagementContent");

  // 네비게이션 탭 전환
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      // 메뉴 이름으로 분기
      const text = item.textContent.trim();
      
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");

      if (text === "대시보드") {
        dashboardContent.hidden = false;
        productManagementContent.hidden = true;
      } else if (text === "상품 관리") {
        dashboardContent.hidden = true;
        productManagementContent.hidden = false;
        renderProductTable();
      } else {
        alert("해당 메뉴는 준비 중입니다.");
      }
    });
  });

  // 상품 관리 로직
  const tbody = document.querySelector("#productTable tbody");
  const modalOverlay = document.getElementById("productModalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const pName = document.getElementById("pName");
  const pBrand = document.getElementById("pBrand");
  const pPrice = document.getElementById("pPrice");
  const pDiscount = document.getElementById("pDiscount");
  const pSrc = document.getElementById("pSrc");
  const modalSave = document.getElementById("modalSave");
  const modalCancel = document.getElementById("modalCancel");
  const addBtn = document.getElementById("addBtn");

  let editingId = null;

  function renderProductTable() {
    tbody.innerHTML = "";
    PRODUCTS.forEach(p => {
      // 메인 상품만 렌더링 (badge 있는 히어로 상품 제외)
      if (p.badge) return;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><img src="${p.mainSrc || ''}" class="prod-img-preview" alt="img"></td>
        <td>${p.name}</td>
        <td>${p.brand}</td>
        <td>₩ ${parseInt(p.price).toLocaleString()}</td>
        <td>${p.discount}%</td>
        <td>
          <button class="btn-edit" data-id="${p.id}">수정</button>
          <button class="btn-danger" data-id="${p.id}">삭제</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // 테이블 내 버튼 클릭 이벤트 위임
  tbody.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("btn-edit")) {
      const id = target.getAttribute("data-id");
      openModal(id);
    } else if (target.classList.contains("btn-danger")) {
      const id = target.getAttribute("data-id");
      if (confirm("정말로 이 상품을 삭제하시겠습니까?")) {
        // 전역 PRODUCTS 배열 수정
        const index = PRODUCTS.findIndex(x => x.id === id);
        if (index > -1) {
          PRODUCTS.splice(index, 1);
          window.saveProducts();
          renderProductTable();
        }
      }
    }
  });

  addBtn.addEventListener("click", () => openModal());

  function openModal(id = null) {
    editingId = id;
    if (id) {
      modalTitle.textContent = "상품 수정";
      const p = PRODUCTS.find(x => x.id === id);
      if (p) {
        pName.value = p.name;
        pBrand.value = p.brand;
        pPrice.value = p.price;
        pDiscount.value = p.discount;
        pSrc.value = p.mainSrc || "";
      }
    } else {
      modalTitle.textContent = "새 상품 추가";
      pName.value = "";
      pBrand.value = "";
      pPrice.value = "";
      pDiscount.value = "0";
      pSrc.value = "";
    }
    modalOverlay.hidden = false;
  }

  modalCancel.addEventListener("click", () => {
    modalOverlay.hidden = true;
  });

  modalSave.addEventListener("click", () => {
    if (!pName.value || !pPrice.value) {
      alert("상품명과 가격은 필수입니다.");
      return;
    }

    if (editingId) {
      // 수정
      const p = PRODUCTS.find(x => x.id === editingId);
      if (p) {
        p.name = pName.value;
        p.brand = pBrand.value;
        p.price = parseInt(pPrice.value);
        p.discount = parseInt(pDiscount.value) || 0;
        p.mainSrc = pSrc.value;
      }
    } else {
      // 추가
      const newProduct = {
        id: "prod-" + Date.now(),
        name: pName.value,
        brand: pBrand.value,
        price: parseInt(pPrice.value),
        discount: parseInt(pDiscount.value) || 0,
        mainSrc: pSrc.value,
        rating: 0,
        ratingCount: 0,
        mainAlt: "추가된 상품",
        thumbs: [],
        features: [],
        steps: [],
        tip: "기본 팁입니다."
      };
      PRODUCTS.unshift(newProduct); // 맨 앞에 추가
    }

    window.saveProducts();
    modalOverlay.hidden = true;
    renderProductTable();
  });
});
