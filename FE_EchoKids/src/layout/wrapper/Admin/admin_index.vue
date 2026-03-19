<template>
  <div v-if="isReady" class="wrapper">

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

<script setup>
import { ref, onMounted } from 'vue'

// components
import SidebarAdmin from '../../components/Admin/SidebarAdmin.vue'
import TopNavbarAdmin from '../../components/Admin/TopNavbarAdmin.vue'
import FooterAdmin from '../../components/Admin/FooterAdmin.vue'

const isReady = ref(false)

//  LOAD CSS ĐÚNG (KHÔNG import)
const loadCSS = (href) => {
  return new Promise(resolve => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.onload = resolve
    document.head.appendChild(link)
  })
}

// LOAD JS
const loadScript = (src) => {
  return new Promise(resolve => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    document.body.appendChild(script)
  })
}

onMounted(async () => {

  // CSS ADMIN
  await loadCSS('/Admin/css/bootstrap.min.css')
  await loadCSS('/Admin/css/typography.css')
  await loadCSS('/Admin/css/style.css')
  await loadCSS('/Admin/css/responsive.css')

  // JS ADMIN
  await loadScript('/Admin/js/jquery.min.js')
  await loadScript('/Admin/js/popper.min.js')
  await loadScript('/Admin/js/bootstrap.min.js')
  await loadScript('/Admin/js/custom.js')

  isReady.value = true
})
</script>