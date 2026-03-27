<template>
  <!-- Logo -->
  <router-link
    to="/"
    class="navbar-brand"
  >
    <h1 class="m-0 text-primary fw-bold">
      EchoKids
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

  <!-- Navbar -->
  <div
    class="collapse navbar-collapse"
    id="navbarCollapse"
  >
    <div class="navbar-nav mx-auto">

      <!-- Trang chủ -->
      <router-link
        to="/"
        class="nav-item nav-link"
        active-class="active"
      >
        Trang chủ
      </router-link>

      <!-- Học tập -->
      <div class="nav-item dropdown">
        <a
          href="#"
          class="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Học tập
        </a>

        <div class="dropdown-menu rounded-4 border-0 shadow-sm m-0">

          <router-link
            to="/child/learning/subject-list"
            class="dropdown-item"
          >
            Chủ đề bài học
          </router-link>

          <router-link
            to="/child/learning/lesson-list"
            class="dropdown-item"
          >
            Danh sách bài học
          </router-link>

          <router-link
            to="/child/practice/therapy"
            class="dropdown-item"
          >
            Luyện phát âm
          </router-link>

          <router-link
            to="/child/listening/listen-and-choose"
            class="dropdown-item"
          >
            Luyện nghe hiểu
          </router-link>

          <router-link
            to="/child/review/mistakes"
            class="dropdown-item"
          >
            Ôn tập lỗi sai
          </router-link>

        </div>
      </div>

      <!-- Theo dõi -->
      <div class="nav-item dropdown">
        <a
          href="#"
          class="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Theo dõi
        </a>

        <div class="dropdown-menu rounded-4 border-0 shadow-sm m-0">

          <router-link
            to="/child/tracking/progress"
            class="dropdown-item"
          >
            Tiến độ học tập
          </router-link>

          <router-link
            to="/child/tracking/history"
            class="dropdown-item"
          >
            Lịch sử luyện tập
          </router-link>

          <router-link
            to="/child/reward/achievement"
            class="dropdown-item"
          >
            Thành tích
          </router-link>

        </div>
      </div>

      <!-- Hồ sơ -->
      <router-link
        to="/child/profile"
        class="nav-item nav-link"
        active-class="active"
      >
        Hồ sơ
      </router-link>

    </div>

    <!-- Action -->
    <div class="d-flex align-items-center gap-2">
      <router-link
        to="/landing"
        class="btn btn-outline-primary rounded-pill px-3 d-none d-lg-block"
      >
        Giới thiệu
      </router-link>

      <router-link
        to="/login"
        class="btn btn-primary rounded-pill px-3 d-none d-lg-block"
      >
        Đăng Nhập
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.navbar-brand {
  font-size: 24px;
}

.nav-link {
  color: #555;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background-color: #eef5ff;
  color: #0d6efd;
}

.active-nav {
  background-color: #0d6efd;
  color: #fff !important;
}

.dropdown-item {
  padding: 10px 14px;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background-color: #eef5ff;
  color: #0d6efd;
}
</style>