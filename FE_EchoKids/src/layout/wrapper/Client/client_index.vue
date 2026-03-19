

<template>
  <div class="container-xxl bg-white p-0">
    <!-- Spinner -->
    <div id="spinner"
      class="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <NavbarClient />
    </nav>

    <!-- Page -->
    <router-view />
  </div>

  <!-- Footer -->
  <FootClient />
</template>
<script setup>
import { onMounted } from 'vue'
import NavbarClient from '../../components/Client/NavbarClient.vue'
import FootClient from '../../components/Client/FooterClient.vue'

// ✅ CSS CLIENT
import '/public/Client/lib/animate/animate.min.css'
import '/public/Client/lib/owlcarousel/assets/owl.carousel.min.css'
import '/public/Client/css/bootstrap.min.css'
import '/public/Client/css/style.css'

// ✅ LOAD JS CLIENT
onMounted(() => {
  const loadScript = (src) => {
    return new Promise(resolve => {
      const script = document.createElement('script')
      script.src = src
      script.onload = resolve
      document.body.appendChild(script)
    })
  }

  const loadAll = async () => {
    // load jquery trước
    await loadScript('https://code.jquery.com/jquery-3.4.1.min.js')

    // load các lib sau
    await loadScript('/Client/lib/wow/wow.min.js')
    await loadScript('/Client/lib/easing/easing.min.js')
    await loadScript('/Client/lib/waypoints/waypoints.min.js')
    await loadScript('/Client/lib/owlcarousel/owl.carousel.min.js')
  }

  loadAll()
})
</script>
<style scoped>

</style>