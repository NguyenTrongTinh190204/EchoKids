<template>
  <div v-if="isReady" class="wrapper">
    <div id="loading">
      <div id="loading-center"></div>
    </div>
    <SidebarAdmin />
    <TopNavbarAdmin />
    <div class="content-page">
      <div class="container-fluid">
        <router-view />
      </div>
    </div>
    <FooterAdmin />
    <nav class="iq-float-menu">
      <input type="checkbox" href="#" class="iq-float-menu-open" name="menu-open" id="menu-open" />
      <label class="iq-float-menu-open-button" for="menu-open">
        <span class="lines line-1"></span>
        <span class="lines line-2"></span>
        <span class="lines line-3"></span>
      </label>
      <button class="iq-float-menu-item bg-info" data-toggle="tooltip" data-placement="top" title="Direction Mode"
        data-mode="rtl"><i class="ri-text-direction-r"></i></button>
      <button class="iq-float-menu-item bg-danger" data-toggle="tooltip" data-placement="top" title="Color Mode"
        id="dark-mode" data-active="true"><i class="ri-sun-line"></i></button>
      <button class="iq-float-menu-item bg-warning" data-toggle="tooltip" data-placement="top" title="Comming Soon"><i
          class="ri-palette-line"></i></button>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import SidebarAdmin from '../../components/Admin/SidebarAdmin.vue'
import TopNavbarAdmin from '../../components/Admin/TopNavbarAdmin.vue'
import FooterAdmin from '../../components/Admin/FooterAdmin.vue'

const isReady = ref(false)
const loadCSS = (href) => {
  return new Promise(resolve => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.onload = resolve
    document.head.appendChild(link)
  })
}
const loadScript = (src) => {
  return new Promise(resolve => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    document.body.appendChild(script)
  })
}

onMounted(async () => {
  await loadCSS('/Admin/css/bootstrap.min.css')
  await loadCSS('/Admin/css/typography.css')
  await loadCSS('/Admin/css/style.css')
  await loadCSS('/Admin/css/responsive.css')
  await loadScript('/Admin/js/jquery.min.js')
  await loadScript('/Admin/js/popper.min.js')
  await loadScript('/Admin/js/bootstrap.min.js')
  await loadScript('/Admin/js/jquery.magnific-popup.min.js')
  await loadScript('/Admin/js/custom.js')
  isReady.value = true
})

</script>
<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css");
</style>