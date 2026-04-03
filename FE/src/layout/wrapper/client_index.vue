
<template>
  <div
    v-if="isReady"
    class="bg-white p-0"
  >
    <!-- Spinner -->
    <div
      id="spinner"
      class="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div class="spinner-border text-primary"></div>
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0 shadow-sm">
      <NavbarClient />
    </nav>

    <!-- Nội dung -->
    <div class="page-width">
      <router-view />
    </div>

    <!-- Footer -->
    <FooterClient />
  </div>
</template>

<script>
import NavbarClient from '../components/Client/NavbarClient.vue'
import FooterClient from '../components/Client/FooterClient.vue'

import '/public/Client/lib/animate/animate.min.css'
import '/public/Client/lib/owlcarousel/assets/owl.carousel.min.css'
import '/public/Client/css/bootstrap.min.css'
import '/public/Client/css/style.css'

export default {
  name: 'ClientLayout',

  components: {
    NavbarClient,
    FooterClient
  },

  data() {
    return {
      isReady: false,
      role: localStorage.getItem('role'),
      navbarKey: 0,
      loadedScripts: []
    }
  },

  watch: {
    $route() {
      this.role = localStorage.getItem('role')
      this.navbarKey++
    }
  },

  methods: {
    loadScript(src) {
      return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = resolve

        document.body.appendChild(script)
        this.loadedScripts.push(script)
      })
    }
  },

  async mounted() {
    await this.loadScript('https://code.jquery.com/jquery-3.4.1.min.js')

    await this.loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js')

    await this.loadScript('/public/Client/lib/wow/wow.min.js')
    await this.loadScript('/public/Client/lib/easing/easing.min.js')
    await this.loadScript('/public/Client/lib/waypoints/waypoints.min.js')
    await this.loadScript('/public/Client/lib/owlcarousel/owl.carousel.min.js')

    this.isReady = true
  },

  beforeUnmount() {
    this.loadedScripts.forEach((item) => {
      if (item) {
        item.remove()
      }
    })
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css");

.page-width {
  width: 92%;
  max-width: 1700px;
  margin: 0 auto;
}

@media (max-width: 991px) {
  .page-width {
    width: 96%;
  }
}
</style>
