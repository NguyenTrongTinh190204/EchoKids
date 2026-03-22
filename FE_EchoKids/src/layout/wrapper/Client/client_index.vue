<template>
  <div v-if="isReady" class="container-xxl bg-white p-0">
    <div id="spinner"
      class="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-border text-primary"></div>
    </div>
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <NavbarClient />
    </nav>
    <router-view />
  </div>
  <FootClient v-if="isReady" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavbarClient from '../../components/Client/NavbarClient.vue'
import FootClient from '../../components/Client/FooterClient.vue'
import '/public/Client/lib/animate/animate.min.css'
import '/public/Client/lib/owlcarousel/assets/owl.carousel.min.css'
import '/public/Client/css/bootstrap.min.css'
import '/public/Client/css/style.css'

const isReady = ref(false)
const loadScript = (src) => {
  return new Promise(resolve => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    document.body.appendChild(script)
  })
}

onMounted(async () => {

await loadScript('https://code.jquery.com/jquery-3.4.1.min.js')


await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js')

await loadScript('/Client/lib/wow/wow.min.js')
await loadScript('/Client/lib/easing/easing.min.js')
await loadScript('/Client/lib/waypoints/waypoints.min.js')
await loadScript('/Client/lib/owlcarousel/owl.carousel.min.js')

  isReady.value = true
  setTimeout(() => {
    if (window.WOW) new WOW().init()

    if (window.$ && $('.owl-carousel').length) {
      $('.owl-carousel').owlCarousel()
    }
    window.dispatchEvent(new Event('resize'))
  }, 100)
})
</script>
<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css");
</style>