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
            <li :class="{ active: $route.path === '/admin/dashboard' }">
              <router-link to="/admin/dashboard" class="iq-waves-effect">
                <i class="ri-home-4-line"></i>
                <span>Dashboard</span>
              </router-link>
            </li>

            <!-- User -->
            <li :class="{ active: $route.path === '/admin/user-management' }">
              <router-link to="/admin/user-management" class="iq-waves-effect">
                <i class="ri-home-3-line"></i>
                <span>User Management</span>
              </router-link>
            </li>

            <!-- Teacher -->
            <li
              :class="{ active: $route.path === '/admin/teacher-management' }"
            >
              <router-link
                to="/admin/teacher-management"
                class="iq-waves-effect"
              >
                <i class="ri-home-8-line"></i>
                <span>Teacher Management</span>
              </router-link>
            </li>

            <!-- Subject -->
            <li
              :class="{ active: $route.path === '/admin/subject-management' }"
            >
              <router-link
                to="/admin/subject-management"
                class="iq-waves-effect"
              >
                <i class="ri-home-7-line"></i>
                <span>Subject Management</span>
              </router-link>
            </li>

            <!-- Vocabulary -->
            <li
              :class="{
                active: $route.path === '/admin/vocabulary-management',
              }"
            >
              <router-link
                to="/admin/vocabulary-management"
                class="iq-waves-effect"
              >
                <i class="ri-home-7-line"></i>
                <span>Vocabulary</span>
              </router-link>
            </li>

            <!-- Quiz -->
            <li :class="{ active: $route.path === '/admin/quiz-management' }">
              <router-link to="/admin/quiz-management" class="iq-waves-effect">
                <i class="ri-home-7-line"></i>
                <span>Quiz</span>
              </router-link>
            </li>

            <!-- Statistics -->
            <li :class="{ active: $route.path === '/admin/statistics' }">
              <router-link to="/admin/statistics" class="iq-waves-effect">
                <i class="ri-home-7-line"></i>
                <span>Statistics</span>
              </router-link>
            </li>

            <!-- AI -->
            <li :class="{ active: $route.path === '/admin/ai-monitor' }">
              <router-link to="/admin/ai-monitor" class="iq-waves-effect">
                <i class="ri-home-7-line"></i>
                <span>AI Monitor</span>
              </router-link>
            </li>

            <!-- Profile -->
            <li :class="{ active: $route.path === '/admin/profile' }">
              <router-link to="/admin/profile" class="iq-waves-effect">
                <i class="ri-home-7-line"></i>
                <span>Profile</span>
              </router-link>
            </li>

            <!-- Role -->
            <li :class="{ active: $route.path === '/admin/role-permission' }">
              <router-link to="/admin/role-permission" class="iq-waves-effect">
                <i class="ri-home-7-line"></i>
                <span>Role Permission</span>
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
