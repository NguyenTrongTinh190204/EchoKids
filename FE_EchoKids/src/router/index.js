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
    meta: { layout: "admin" },
  },

  {
    path: "/admin/user-management",
    component: () => import("../components/Admin/UserManagement/index.vue"),
    meta: { layout: "admin" },
  },

  {
    path: "/admin/teacher-management",
    component: () => import("../components/Admin/TeacherManagement/index.vue"),
    meta: { layout: "admin" },
  },

  {
    path: "/admin/vocabulary-management",
    component: () =>
      import("../components/Admin/VocabularyManagement/index.vue"),
    meta: { layout: "admin" },
  },
  
  {
    path: "/admin/subject-management",
    component: () => import("../components/Admin/SubjectManagement/index.vue"),
    meta: { layout: "admin" },
  },

    {
    path: "/admin/quiz-management",
    component: () => import("../components/Admin/QuizManagement/index.vue"),
    meta: { layout: "admin" },
  },

  {
    path: "/admin/profile",
    component: () => import("../components/Admin/Profile/index.vue"),
    meta: { layout: "admin" },
  },

  {
    path: "/admin/role-permission",
    component: () => import("../components/Admin/RolePermission/index.vue"),
    meta: { layout: "admin" },
  },

  {
    path: "/admin/statistics",
    component: () => import("../components/Admin/Statistics/index.vue"),
    meta: { layout: "admin" },
  },

  {
    path: "/admin/ai-monitor",
    component: () => import("../components/Admin/AIMonitor/index.vue"),
    meta: { layout: "admin" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
