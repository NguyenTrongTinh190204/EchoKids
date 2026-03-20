import { createRouter, createWebHistory } from "vue-router";

const routes = [
  //CLIENT
  {
    path: "/",
    component: () => import("../components/Client/Home/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/luyen-phat-am",
    component: () => import("../components/Client/LuyenPhatAm/index.vue"),
    meta: { layout: "client" },
  },

  //ADMIN
{
  path: "/admin/dashboard",
  component: () => import("../components/Admin/Dashboard/index.vue"),
  meta: { layout: "admin" }
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;