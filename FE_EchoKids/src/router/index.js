import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
  {
    path: "/",
    component: () => import("../components/Client/Home/index.vue"),
    meta: { layout: "client" },
  },
   {
    path: "/home",
    component: () => import("../components/Client/Home/index.vue"),
    meta: { layout: "client" },
  },
   {
    path: "/luyen-phat-am",
    component: () => import("../components/Client/LuyenPhatAm/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/admin/dashboard",
    component: () => import("../components/Admin/Dashboard/index.vue"),
    meta: { layout: "default" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
