import { createRouter, createWebHistory } from "vue-router";

const routes = [
  //-------------------------------------------CLIENT----------------------------------------------------------------
  //-----HOME-----
  {
    path: "/",
    component: () => import("../components/Client/Home/index.vue"),
    meta: { layout: "client" },
  },

  //-----LEARNING-----
  {
    path: "/client/learning/lesson-list",
    component: () => import("../components/Client/Learning/LessonList/index.vue"),
    meta: { layout: "client" },
  },

  {
    path: "/client/learning/practice",
    component: () => import("../components/Client/Learning/Practice/index.vue"),
    meta: { layout: "client" },
  },

    {
    path: "/client/learning/result",
    component: () => import("../components/Client/Learning/Result/index.vue"),
    meta: { layout: "client" },
  },

    {
    path: "/client/learning/review",
    component: () => import("../components/Client/Learning/Review/index.vue"),
    meta: { layout: "client" },
  },

    {
    path: "/client/learning/subject-list",
    component: () => import("../components/Client/Learning/SubjectList/index.vue"),
    meta: { layout: "client" },
  },




  //-----PROFILE-----
  {
    path: "/client/profile",
    component: () => import("../components/Client/Profile/index.vue"),
    meta: { layout: "client" },
  },

  //-----TRACKING-----
  {
    path: "/client/tracking/history",
    component: () => import("../components/Client/Tracking/History/index.vue"),
    meta: { layout: "client" },
  },

    {
    path: "/client/tracking/progress",
    component: () => import("../components/Client/Tracking/Progress/index.vue"),
    meta: { layout: "client" },
  },

  //---------------------------------------------TEACHER--------------------------------------------------------------


  //---------------------------------------------ADMIN--------------------------------------------------------------
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
