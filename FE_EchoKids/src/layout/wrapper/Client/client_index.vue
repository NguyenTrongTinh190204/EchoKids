<template>
    <div class="container-xxl bg-white p-0">
        <div id="spinner"
            class="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <NavbarClient></NavbarClient>
        </nav>
        <router-view></router-view>
        <!-- <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a> -->
    </div>
    <FootClient></FootClient>
</template>
<script>
import NavbarClient from '../../components/Client/NavbarClient.vue';
import FootClient from '../../components/Client/FooterClient.vue';
export default {
    name: "app",
    components: {
        NavbarClient, FootClient
    },
    
}
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");
</style>