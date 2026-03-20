<template>
  <router-link to="/home" class="navbar-brand">
    <h1 class="m-0 text-primary">
      <i class="fa fa-book-reader me-3"></i>EchoKids
    </h1>
  </router-link>

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
      <router-link to="/home" class="nav-item nav-link" active-class="active">
        🏠 Trang Chủ
      </router-link>

      <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
          >🎮 Học & Chơi</a
        >
        <div
          class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0"
        >
          <router-link to="/luyen-phat-am" class="dropdown-item" active-class="active">Chọn Chủ Đề</router-link>
                    <router-link to="/tu-vung" class="dropdown-item" active-class="active">Chọn Bài Học</router-link>
                    <router-link to="/tro-choi" class="dropdown-item" active-class="active">Luyện Phát Âm</router-link>
        </div>
      </div>

      <router-link
        to="/tien-do"
        class="nav-item nav-link"
        active-class="active"
      >
        ⭐ Thành Tích
      </router-link>

      <router-link
        to="/cam-nang"
        class="nav-item nav-link"
        active-class="active"
      >
        📜 Lịch Sử
      </router-link>
      <router-link
        to="/cam-nang"
        class="nav-item nav-link"
        active-class="active"
      >
        👨‍👩‍👧 Phụ Huynh
      </router-link>
    </div>

    <router-link
      to="/dang-nhap"
      class="btn btn-danger rounded-pill px-3 d-none d-lg-block"
    >
      Đăng Xuất<i class="fa fa-sign-out-alt ms-3"></i>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
