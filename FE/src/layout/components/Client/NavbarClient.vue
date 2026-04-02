<template>
  <!-- Logo -->
  <router-link to="/" class="navbar-brand">
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
    <div class="navbar-nav mx-auto">

      <!-- Trang chủ -->
      <router-link to="/" class="nav-item nav-link" active-class="active">
        🏠 Trang Chủ
      </router-link>

      <!-- Học & Chơi -->
      <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          🎮 Học & Chơi
        </a>

        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
          
          <router-link 
            to="/client/learning/subject-list" 
            class="dropdown-item"
          >
            Chọn Chủ Đề
          </router-link>

          <router-link 
            to="/client/learning/lesson-list" 
            class="dropdown-item"
          >
            Chọn Bài Học
          </router-link>

          <router-link 
            to="/client/learning/practice" 
            class="dropdown-item"
          >
            Luyện Phát Âm
          </router-link>

          <router-link 
            to="/client/learning/review" 
            class="dropdown-item"
          >
            Ôn Tập
          </router-link>

          <router-link 
            to="/client/learning/result" 
            class="dropdown-item"
          >
            Kết Quả
          </router-link>

        </div>
      </div>

      <!-- Thành tích -->
      <router-link
        to="/client/tracking/progress"
        class="nav-item nav-link"
        active-class="active"
      >
        ⭐ Thành Tích
      </router-link>

      <!-- Lịch sử -->
      <router-link
        to="/client/tracking/history"
        class="nav-item nav-link"
        active-class="active"
      >
        📜 Lịch Sử
      </router-link>

      <!-- Profile -->
      <router-link
        to="/client/profile"
        class="nav-item nav-link"
        active-class="active"
      >
        👤 Hồ Sơ
      </router-link>

    </div>

    <!-- Logout -->
    <router-link
      to="/dang-nhap"
      class="btn btn-danger rounded-pill px-3 d-none d-lg-block"
    >
      Đăng Xuất <i class="fa fa-sign-out-alt ms-3"></i>
    </router-link>
  </div>
</template>