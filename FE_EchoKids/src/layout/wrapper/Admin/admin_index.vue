<template>
  <div class="wrapper">
    
    <!-- Loader -->
    <div id="loading">
      <div id="loading-center"></div>
    </div>

    <!-- Sidebar -->
    <SidebarAdmin />

    <!-- Navbar -->
    <TopNavbarAdmin />

    <!-- Main Content -->
    <div class="content-page">
      <div class="container-fluid">
        <router-view />
      </div>
    </div>

    <!-- Footer -->
    <FooterAdmin />

  </div>
</template>

<script>
// DÙNG alias @ để không bao giờ sai path
import SidebarAdmin from '../../components/Admin/SidebarAdmin.vue'
import TopNavbarAdmin from '../../components/Admin/TopNavbarAdmin.vue'
import FooterAdmin from '../../components/Admin/FooterAdmin.vue'

export default {
  name: "AdminLayout",
  components: {
    SidebarAdmin,
    TopNavbarAdmin,
    FooterAdmin
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css");
</style>