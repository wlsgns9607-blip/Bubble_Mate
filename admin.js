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
  const pFile = document.getElementById("pFile");
  const imgPreview = document.getElementById("imgPreview");
  const modalSave = document.getElementById("modalSave");
  const modalCancel = document.getElementById("modalCancel");
  const addBtn = document.getElementById("addBtn");

  let editingId = null;

  pFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target.result;
      pSrc.value = base64String;
      imgPreview.src = base64String;
      imgPreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  });

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
        
        if (p.mainSrc) {
          imgPreview.src = p.mainSrc;
          imgPreview.style.display = "block";
        } else {
          imgPreview.src = "";
          imgPreview.style.display = "none";
        }
        pFile.value = "";
      }
    } else {
      modalTitle.textContent = "새 상품 추가";
      pName.value = "";
      pBrand.value = "";
      pPrice.value = "";
      pDiscount.value = "0";
      pSrc.value = "";
      imgPreview.src = "";
      imgPreview.style.display = "none";
      pFile.value = "";
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

  // ==========================================
  // 대시보드 통계 & 차트 렌더링
  // ==========================================
  function renderDashboard() {
    const orders = JSON.parse(localStorage.getItem("bubble_orders") || "[]");
    
    // 1. 통계 업데이트
    const totalSales = orders.reduce((sum, order) => sum + (order.amount || 0), 0);
    document.getElementById("dashSales").textContent = "₩ " + totalSales.toLocaleString();
    document.getElementById("dashOrders").textContent = orders.length + " 건";

    // 2. 최근 주문 내역 업데이트
    const dashOrderTable = document.getElementById("dashOrderTable");
    dashOrderTable.innerHTML = "";
    if (orders.length === 0) {
      dashOrderTable.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 20px;">최근 주문 내역이 없습니다.</td></tr>`;
    } else {
      orders.slice(0, 5).forEach(order => {
        let statusClass = "st-ready";
        if (order.status === "배송 중") statusClass = "st-ing";
        if (order.status === "배송 완료") statusClass = "st-done";
        
        dashOrderTable.innerHTML += `
          <tr>
            <td>${order.orderId}</td>
            <td>${order.customerName}</td>
            <td>${order.orderName}</td>
            <td>${order.date}</td>
            <td>₩ ${order.amount.toLocaleString()}</td>
            <td><span class="status ${statusClass}">${order.status}</span></td>
          </tr>
        `;
      });
    }

    // 3. 차트 렌더링 (Chart.js)
    const ctx = document.getElementById('salesChart');
    if (!ctx) return;
    
    // 가짜 7일치 날짜 데이터 생성
    const labels = [];
    const data = [120000, 190000, 150000, 220000, 180000, 310000];
    for (let i = 6; i >= 1; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      labels.push(d.toISOString().slice(5, 10).replace('-', '/'));
    }
    // 오늘 매출 (실제 orders 데이터 반영)
    labels.push("오늘");
    data.push(totalSales || 50000);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '일별 매출 추이 (원)',
          data: data,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  // ==========================================
  // 관리자 로그인 보호 로직
  // ==========================================
  const adminLoginOverlay = document.getElementById("adminLoginOverlay");
  const adminContainer = document.querySelector(".admin-container");
  const adminIdInput = document.getElementById("adminId");
  const adminPwInput = document.getElementById("adminPw");
  const adminLoginSubmit = document.getElementById("adminLoginSubmit");
  const adminLoginCancel = document.getElementById("adminLoginCancel");
  const adminLogout = document.getElementById("adminLogout");

  function checkAdminAuth() {
    const isLogged = sessionStorage.getItem("admin_logged_in") === "true";
    if (isLogged) {
      if (adminLoginOverlay) adminLoginOverlay.style.display = "none";
      if (adminContainer) adminContainer.style.display = "flex";
    } else {
      if (adminLoginOverlay) adminLoginOverlay.style.display = "flex";
      if (adminContainer) adminContainer.style.display = "none";
    }
  }

  // 초기 권한 확인
  checkAdminAuth();

  if (adminLoginSubmit) {
    adminLoginSubmit.addEventListener("click", performAdminLogin);
  }

  // 엔터 키 누를 때 로그인
  [adminIdInput, adminPwInput].forEach(input => {
    if (input) {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") performAdminLogin();
      });
    }
  });

  function performAdminLogin() {
    const id = adminIdInput.value.trim();
    const pw = adminPwInput.value.trim();

    if (id === "admin" && pw === "1234") {
      sessionStorage.setItem("admin_logged_in", "true");
      checkAdminAuth();
      // 로그인 성공 시 대시보드 데이터 다시 로드 및 차트 크기 재조정
      renderDashboard();
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
      adminPwInput.value = "";
      adminPwInput.focus();
    }
  }

  if (adminLoginCancel) {
    adminLoginCancel.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  if (adminLogout) {
    adminLogout.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("로그아웃 하시겠습니까?")) {
        sessionStorage.removeItem("admin_logged_in");
        window.location.href = "index.html";
      }
    });
  }

  // 초기 대시보드 렌더링 (로그인된 상태일 때만 의미있음)
  if (sessionStorage.getItem("admin_logged_in") === "true") {
    renderDashboard();
  }
});
