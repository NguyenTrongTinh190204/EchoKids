import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/Client/TrangChu/index.vue"),
    meta: { layout: "client" },
  },

    {
    path: "/chu-de",
    component: () => import("../components/Client/ChuDe/index.vue"),
    meta: { layout: "client" },
  },
    {
    path: "/bai-hoc",
    component: () => import("../components/Client/BaiHoc/index.vue"),
    meta: { layout: "client" },
  },
      {
    path: "/chi-tiet-bai-hoc",
    component: () => import("../components/Client/ChiTietBaiHoc/index.vue"),
    meta: { layout: "client" },
  },
        {
    path: "/bai-kiem-tra",
    component: () => import("../components/Client/BaiKiemTra/index.vue"),
    meta: { layout: "client" },
  },
  //---------------------------------------------ADMIN--------------------------------------------------------------
  {
    path: "/admin/dashboard",
    component: () => import("../components/AHeThong/Admin/Dashboard/index.vue"),
    meta: { layout: "admin" },
  },
  {
    path: "/admin/phan-quyen",
    component: () => import("../components/AHeThong/Admin/PhanQuyen/index.vue"),
    meta: { layout: "admin" },
  },
  //---------------------------------------------TEACHER--------------------------------------------------------------
  {
    path: "/teacher/dashboard",
    component: () => import("../components/AHeThong/Teach/Dashboard/index.vue"),
    meta: { layout: "teach" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
