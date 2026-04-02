<template>
  <div>
    <div class="iq-sidebar">
      <div class="iq-sidebar-logo d-flex justify-content-between">
        <a href="/admin/dashboard" class="d-flex align-items-center text-danger text-nowrap"
          style="font-size: 24px; text-decoration: none;">
          <i class="fa fa-book-reader fa-xl me-2" style="position: relative; top: -2px;"></i>
          <span class="m-0 fw-bold text-uppercase text-danger" style="font-size: 18px;">
            <b>ADMIN ECHOKIDS</b>
          </span>
        </a>
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
      <div id="sidebar-scrollbar">
        <nav class="iq-sidebar-menu">
          <ul class="iq-menu">
            <li :class="{ active: $route.path === '/admin/dashboard' }">
              <router-link to="/admin/dashboard" class="iq-waves-effect mt-1">
                <i class="ri-home-4-line"></i>
                <span>Dashboard</span>
              </router-link>
            </li>
          
            <li :class="{ active: $route.path === '/admin/teacher-management' }">
              <router-link to="/admin/teacher-management" class="iq-waves-effect mt-1">
                <i class="ri-home-8-line"></i>
                <span>Teacher Management</span>
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
