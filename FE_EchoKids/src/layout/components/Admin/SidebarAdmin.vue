<template>
  <div class="iq-sidebar">

    <!-- LOGO -->
    <div class="iq-sidebar-logo d-flex justify-content-between align-items-center">
      <router-link
        to="/admin/dashboard"
        class="d-flex align-items-center text-decoration-none"
      >
        <div class="logo-box me-2">
          EK
        </div>

        <div>
          <div class="fw-bold text-primary">
            EchoKids
          </div>

          <small class="text-muted">
            Admin Panel
          </small>
        </div>
      </router-link>

      <div class="iq-menu-bt-sidebar">
        <div class="iq-menu-bt align-self-center">
          <div class="wrapper-menu">
            <div class="main-circle">
              ‹
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MENU -->
    <div id="sidebar-scrollbar">
      <nav class="iq-sidebar-menu">
        <ul class="iq-menu">

          <!-- Dashboard -->
          <li :class="{ active: $route.path === '/admin/dashboard' }">
            <router-link
              to="/admin/dashboard"
              class="iq-waves-effect mt-1"
            >
              <span>Dashboard</span>
            </router-link>
          </li>

          <!-- User -->
          <li :class="{ active: $route.path === '/admin/user' }">
            <router-link
              to="/admin/user"
              class="iq-waves-effect mt-1"
            >
              <span>Người dùng</span>
            </router-link>
          </li>

          <!-- Teacher -->
          <li :class="{ active: $route.path === '/admin/teacher' }">
            <router-link
              to="/admin/teacher"
              class="iq-waves-effect mt-1"
            >
              <span>Giáo viên</span>
            </router-link>
          </li>

          <!-- Subject -->
          <li :class="{ active: $route.path === '/admin/content/subject' }">
            <router-link
              to="/admin/content/subject"
              class="iq-waves-effect mt-1"
            >
              <span>Chủ đề bài học</span>
            </router-link>
          </li>

                    <!-- Vocabulary -->
          <li :class="{ active: $route.path === '/admin/content/vocabulary' }">
            <router-link
              to="/admin/content/vocabulary"
              class="iq-waves-effect mt-1"
            >
              <span>Từ vựng</span>
            </router-link>
          </li>

          <!-- Practice -->
          <li :class="{ active: $route.path === '/admin/practice' }">
            <router-link
              to="/admin/practice"
              class="iq-waves-effect mt-1"
            >
              <span>Bài luyện tập</span>
            </router-link>
          </li>

          <!-- Role -->
          <li :class="{ active: $route.path === '/admin/role' }">
            <router-link
              to="/admin/role"
              class="iq-waves-effect mt-1"
            >
              <span>Vai trò</span>
            </router-link>
          </li>

          <!-- Permission -->
          <li :class="{ active: $route.path === '/admin/role/permission' }">
            <router-link
              to="/admin/role/permission"
              class="iq-waves-effect mt-1"
            >
              <span>Phân quyền</span>
            </router-link>
          </li>

          <!-- Statistics -->
          <li :class="{ active: $route.path === '/admin/statistics' }">
            <router-link
              to="/admin/statistics"
              class="iq-waves-effect mt-1"
            >
              <span>Thống kê</span>
            </router-link>
          </li>

          <!-- AI Monitor -->
          <li :class="{ active: $route.path === '/admin/ai' }">
            <router-link
              to="/admin/ai"
              class="iq-waves-effect mt-1"
            >
              <span>AI Monitor</span>
            </router-link>
          </li>

        </ul>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  name: "AdminSidebar"
};
</script>

<style scoped>
.logo-box {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, #0d6efd, #4da3ff);
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.iq-menu li {
  list-style: none;
}

.iq-menu li a {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 6px;
  border-radius: 14px;
  color: #555;
  text-decoration: none;
  transition: all 0.2s ease;
}

.iq-menu li a:hover {
  background-color: #eef5ff;
  color: #0d6efd;
}

.iq-menu li.active a {
  background: linear-gradient(135deg, #0d6efd, #4da3ff);
  color: #fff;
  font-weight: 600;
}

.main-circle {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #eef5ff;
  color: #0d6efd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
</style>