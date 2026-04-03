<template>
  <!-- Logo -->
  <router-link to="/" class="navbar-brand d-flex align-items-center">
    <h1 class="m-0 text-primary">
      <i class="fa fa-book-reader me-3"></i>EchoKids
    </h1>
  </router-link>

  <!-- Toggle -->
  <button
    type="button"
    class="navbar-toggler"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarCollapse">
    <div class="navbar-nav mx-auto align-items-lg-center">

      <!-- Trang chủ -->
      <router-link
        to="/"
        class="nav-item nav-link px-3 rounded-pill mx-1"
        active-class="active"
      >
        🏠 Trang Chủ
      </router-link>

      <!-- Học tập -->
      <div class="nav-item dropdown">
        <a
          href="#"
          class="nav-link dropdown-toggle px-3 rounded-pill mx-1"
          data-bs-toggle="dropdown"
        >
          📚 Học Tập
        </a>

        <div class="dropdown-menu rounded-4 border-0 shadow-sm m-0 p-2">
          <router-link
            to="/client/learning/subject-list"
            class="dropdown-item rounded-3 py-2"
          >
            🎯 Chọn Chủ Đề
          </router-link>

          <router-link
            to="/client/learning/lesson-list"
            class="dropdown-item rounded-3 py-2"
          >
            📖 Chọn Bài Học
          </router-link>

          <router-link
            to="/client/learning/practice"
            class="dropdown-item rounded-3 py-2"
          >
            🎤 Luyện Phát Âm
          </router-link>

          <router-link
            to="/client/learning/test"
            class="dropdown-item rounded-3 py-2"
          >
            📝 Kiểm Tra
          </router-link>

          <router-link
            to="/client/learning/result"
            class="dropdown-item rounded-3 py-2"
          >
            🏆 Kết Quả
          </router-link>
        </div>
      </div>

      <!-- Tiến độ -->
      <router-link
        to="/client/tracking/progress"
        class="nav-item nav-link px-3 rounded-pill mx-1"
        active-class="active"
      >
        ⭐ Tiến Độ
      </router-link>

      <!-- Chuỗi ngày học -->
      <router-link
        to="/client/tracking/streak"
        class="nav-item nav-link px-3 rounded-pill mx-1"
        active-class="active"
      >
        🔥 Chuỗi Ngày Học
      </router-link>

      <!-- Bảng xếp hạng -->
      <router-link
        to="/client/tracking/leaderboard"
        class="nav-item nav-link px-3 rounded-pill mx-1"
        active-class="active"
      >
        🏅 Xếp Hạng
      </router-link>

    </div>

    <!-- Logout -->
<router-link
  to="/dang-nhap"
  class="btn btn-primary rounded-pill px-4 py-2 d-none d-lg-block"
>
  Đăng Nhập <i class="fa fa-sign-in-alt ms-2"></i>
</router-link>
  </div>
</template>
<style>
.navbar {
  padding-top: 18px;
  padding-bottom: 18px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
}

.navbar-brand h1 {
  font-size: 34px;
  font-weight: 800;
  color: #ff6b35 !important;
  font-family: 'Lobster Two', cursive;
  transition: all 0.3s ease;
}

.navbar-brand h1:hover {
  transform: scale(1.05);
}

.navbar-brand i {
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  color: #fff;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(255, 107, 53, 0.25);
  transition: all 0.3s ease;
}

.navbar-brand:hover i {
  transform: rotate(-8deg) scale(1.08);
}

.navbar-nav {
  gap: 8px;
}

.navbar .nav-link {
  position: relative;
  font-weight: 700;
  color: #0d3b66 !important;
  padding: 12px 18px !important;
  border-radius: 999px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.navbar .nav-link::before {
  content: "";
  position: absolute;
  width: 0;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #fff3ef, #ffe7db);
  transition: all 0.3s ease;
  z-index: -1;
}

.navbar .nav-link:hover::before {
  width: 100%;
}

.navbar .nav-link:hover {
  color: #ff6b35 !important;
  transform: translateY(-3px);
}

.navbar .nav-link.active {
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  color: #fff !important;
  box-shadow: 0 12px 24px rgba(255, 107, 53, 0.25);
}

.navbar .nav-link.active:hover {
  transform: translateY(-3px) scale(1.03);
}

.dropdown-menu {
  border: none;
  border-radius: 24px;
  padding: 12px;
  margin-top: 12px;
  min-width: 260px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
  animation: dropdownFade 0.25s ease;
}

.dropdown-item {
  padding: 12px 16px;
  border-radius: 16px;
  font-weight: 600;
  color: #0d3b66;
  transition: all 0.3s ease;
}

.dropdown-item:hover {
  background: linear-gradient(135deg, #fff3ef, #ffe7db);
  color: #ff6b35;
  transform: translateX(5px);
}

.btn.btn-primary.rounded-pill {
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  border: none;
  font-weight: 700;
  box-shadow: 0 12px 24px rgba(255, 107, 53, 0.2);
  transition: all 0.3s ease;
}

.btn.btn-primary.rounded-pill:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px rgba(255, 107, 53, 0.28);
}

.navbar-toggler {
  border: none;
  box-shadow: none !important;
  background: #fff3ef;
  border-radius: 14px;
  padding: 10px 14px;
}

.navbar-toggler:hover {
  background: #ffe7db;
}

@keyframes dropdownFade {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}</style>