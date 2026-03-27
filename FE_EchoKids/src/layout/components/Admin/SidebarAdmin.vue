<template>
  <div>
    <div class="iq-sidebar">
      <!-- LOGO -->
      <div class="iq-sidebar-logo d-flex justify-content-between">
        <router-link to="/admin/dashboard">
          <div class="iq-light-logo">
            <img src="/Admin/images/logo.gif" class="img-fluid" />
          </div>
          <div class="iq-dark-logo">
            <img src="/Admin/images/logo-dark.gif" class="img-fluid" />
          </div>
          <span>Admin</span>
        </router-link>

        <div class="iq-menu-bt-sidebar">
          <div class="iq-menu-bt align-self-center">
            <div class="wrapper-menu">
              <div class="main-circle">
                <i class="ri-arrow-left-s-line"></i>
              </div>
              <div class="hover-circle">
                <i class="ri-arrow-right-s-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MENU -->
      <div id="sidebar-scrollbar">
        <nav class="iq-sidebar-menu">
          <ul class="iq-menu">
            
            <!-- <li class="iq-menu-title">
              <i class="ri-subtract-line"></i><span>Dashboard</span>
            </li> -->

            <!-- Dashboard -->
<!-- Dashboard -->
<li :class="{ active: $route.path === '/admin/dashboard' }">
  <router-link to="/admin/dashboard" class="iq-waves-effect mt-1">
    <i class="ri-home-4-line"></i>
    <span>Dashboard</span>
  </router-link>
</li>

<!-- User -->
<li :class="{ active: $route.path === '/admin/user' }">
  <router-link to="/admin/user" class="iq-waves-effect mt-1">
    <i class="ri-user-3-line"></i>
    <span>Người dùng</span>
  </router-link>
</li>

<!-- Teacher -->
<li :class="{ active: $route.path === '/admin/teacher' }">
  <router-link to="/admin/teacher" class="iq-waves-effect mt-1">
    <i class="ri-team-line"></i>
    <span>Giáo viên</span>
  </router-link>
</li>

<!-- Subject -->
<li :class="{ active: $route.path === '/admin/content/subject' }">
  <router-link to="/admin/content/subject" class="iq-waves-effect mt-1">
    <i class="ri-book-open-line"></i>
    <span>Chủ đề bài học</span>
  </router-link>
</li>

<!-- Vocabulary -->
<li :class="{ active: $route.path === '/admin/content/vocabulary' }">
  <router-link to="/admin/content/vocabulary" class="iq-waves-effect mt-1">
    <i class="ri-file-list-3-line"></i>
    <span>Từ vựng</span>
  </router-link>
</li>

<!-- Practice -->
<li :class="{ active: $route.path === '/admin/practice' }">
  <router-link to="/admin/practice" class="iq-waves-effect mt-1">
    <i class="ri-edit-box-line"></i>
    <span>Bài luyện tập</span>
  </router-link>
</li>

<!-- Role -->
<li :class="{ active: $route.path === '/admin/role' }">
  <router-link to="/admin/role" class="iq-waves-effect mt-1">
    <i class="ri-shield-user-line"></i>
    <span>Vai trò</span>
  </router-link>
</li>

<!-- Permission -->
<li :class="{ active: $route.path === '/admin/role/permission' }">
  <router-link to="/admin/role/permission" class="iq-waves-effect mt-1">
    <i class="ri-lock-2-line"></i>
    <span>Phân quyền</span>
  </router-link>
</li>

<!-- Statistics -->
<li :class="{ active: $route.path === '/admin/statistics' }">
  <router-link to="/admin/statistics" class="iq-waves-effect mt-1">
    <i class="ri-bar-chart-box-line"></i>
    <span>Thống kê</span>
  </router-link>
</li>

<!-- AI -->
<li :class="{ active: $route.path === '/admin/ai' }">
  <router-link to="/admin/ai" class="iq-waves-effect mt-1">
    <i class="ri-cpu-line"></i>
    <span>AI Monitor</span>
  </router-link>
</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
