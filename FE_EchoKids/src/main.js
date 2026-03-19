import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/Admin/admin_index.vue'
import Client from './layout/wrapper/Client/client_index.vue'
import Toaster from "@meforma/vue-toaster";

const app = createApp(App)

app.use(router)
app.use(Toaster, {
    position: "top-right",
  });
app.component("default-layout", Default);
app.component("client-layout",Client);

app.directive('fade-up', {
    mounted(el) {
        el.classList.add('fade-up');
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observerInstance.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 
        });

        observer.observe(el);
    }
});
app.mount("#app")