<template>
  <div class="wrapper" v-if="isReady">
    <router-view />
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'



onMounted(async () => {
  loadCSS("https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@600&family=Lobster+Two:wght@700&display=swap");
  loadCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css");
  loadCSS("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");
  
  loadCSS("/Client/lib/animate/animate.min.css");
  loadCSS("/Client/lib/owlcarousel/assets/owl.carousel.min.css");
  loadCSS("/Client/css/bootstrap.min.css");
  loadCSS("/Client/css/style.css");

  await loadScript('https://code.jquery.com/jquery-3.4.1.min.js')
  await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js')
  
  await loadScript('/Client/lib/wow/wow.min.js')
  await loadScript('/Client/lib/easing/easing.min.js')
  await loadScript('/Client/lib/waypoints/waypoints.min.js')
  await loadScript('/Client/lib/owlcarousel/owl.carousel.min.js')
  isReady.value = true
  await nextTick()
  await loadScript('/Client/js/main.js')
})
const isReady = ref(false)

const loadCSS = (href) => {
  return new Promise((resolve) => {
    const existed = document.querySelector(`link[href="${href}"]`);

    if (existed) {
      resolve();
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = resolve;
    document.head.appendChild(link);
  });
};

const loadScript = (src) => {
  return new Promise((resolve) => {
    const existed = document.querySelector(`script[src="${src}"]`);

    if (existed) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    document.body.appendChild(script);
  });
};
</script>

<style>
</style>