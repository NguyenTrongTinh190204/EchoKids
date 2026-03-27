import { createRouter, createWebHistory } from "vue-router";

const routes = [
  //-------------------------------------------CLIENT----------------------------------------------------------------
  //-----CHILD-----
  {
    path: "/",
    component: () => import("../modules/child/home/KidHome.vue"),
    meta: { layout: "client" },
  },

  //-----LEARNING-----
  // {
  //   path: "/client/learning/lesson-list",
  //   component: () => import("../components/Client/Learning/LessonList/index.vue"),
  //   meta: { layout: "client" },
  // },

  // {
  //   path: "/client/learning/practice",
  //   component: () => import("../components/Client/Learning/Practice/index.vue"),
  //   meta: { layout: "client" },
  // },

  //   {
  //   path: "/client/learning/result",
  //   component: () => import("../components/Client/Learning/Result/index.vue"),
  //   meta: { layout: "client" },
  // },

  //   {
  //   path: "/client/learning/review",
  //   component: () => import("../components/Client/Learning/Review/index.vue"),
  //   meta: { layout: "client" },
  // },

  //   {
  //   path: "/client/learning/subject-list",
  //   component: () => import("../components/Client/Learning/SubjectList/index.vue"),
  //   meta: { layout: "client" },
  // },




  //-----PROFILE-----


  //-----TRACKING-----

  //---------------------------------------------TEACHER--------------------------------------------------------------


  //---------------------------------------------ADMIN--------------------------------------------------------------
  // {
  //   path: "/admin/dashboard",
  //   component: () => import("../components/Admin/Dashboard/index.vue"),
  //   meta: { layout: "admin" },
  // },

  // {
  //   path: "/admin/user-management",
  //   component: () => import("../components/Admin/UserManagement/index.vue"),
  //   meta: { layout: "admin" },
  // },

  // {
  //   path: "/admin/teacher-management",
  //   component: () => import("../components/Admin/TeacherManagement/index.vue"),
  //   meta: { layout: "admin" },
  // },

  // {
  //   path: "/admin/vocabulary-management",
  //   component: () =>
  //     import("../components/Admin/VocabularyManagement/index.vue"),
  //   meta: { layout: "admin" },
  // },
  
  // {
  //   path: "/admin/subject-management",
  //   component: () => import("../components/Admin/SubjectManagement/index.vue"),
  //   meta: { layout: "admin" },
  // },

  //   {
  //   path: "/admin/practice-management",
  //   component: () => import("../components/Admin/PracticeManagement/index.vue"),
  //   meta: { layout: "admin" },
  // },

  // {
  //   path: "/admin/profile",
  //   component: () => import("../components/Admin/Profile/index.vue"),
  //   meta: { layout: "admin" },
  // },

  // {
  //   path: "/admin/role-permission",
  //   component: () => import("../components/Admin/RolePermission/index.vue"),
  //   meta: { layout: "admin" },
  // },

  // {
  //   path: "/admin/statistics",
  //   component: () => import("../components/Admin/Statistics/index.vue"),
  //   meta: { layout: "admin" },
  // },

  // {
  //   path: "/admin/ai-monitor",
  //   component: () => import("../components/Admin/AIMonitor/index.vue"),
  //   meta: { layout: "admin" },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
