import { createRouter, createWebHistory } from "vue-router";

const routes = [
  //-------------------------------------------GUEST--------------------------------------------------------------
  {
    path: "/landing",
    component: () => import("../modules/guest/landing/LandingPage.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/login",
    component: () => import("../modules/guest/auth/Login.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/register",
    component: () => import("../modules/guest/auth/Register.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/demo",
    component: () => import("../modules/guest/demo/DemoLearning.vue"),
    meta: { layout: "client" },
  },

  //-------------------------------------------CHILD--------------------------------------------------------------
  //-----Home-----
  {
    path: "/",
    component: () => import("../modules/child/home/KidHome.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/child/home",
    component: () => import("../modules/child/home/KidHome.vue"),
    meta: { layout: "client" },
  },

  //-----Learning-----
  {
    path: "/child/learning/subject-list",
    component: () => import("../modules/child/learning/SubjectList.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/child/learning/lesson-list",
    component: () => import("../modules/child/learning/LessonList.vue"),
    meta: { layout: "client" },
  },

  //-----Practice-----
  {
    path: "/child/practice/therapy",
    component: () => import("../modules/child/practice/TherapyFlow.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/child/practice/listen",
    component: () => import("../modules/child/practice/steps/ListenStep.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/child/practice/watch",
    component: () => import("../modules/child/practice/steps/WatchStep.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/child/practice/imitate",
    component: () => import("../modules/child/practice/steps/ImitateStep.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/child/practice/speak",
    component: () => import("../modules/child/practice/steps/SpeakStep.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/child/practice/feedback",
    component: () => import("../modules/child/practice/steps/FeedbackStep.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/child/practice/repeat",
    component: () => import("../modules/child/practice/steps/RepeatStep.vue"),
    meta: { layout: "client" },
  },

  //-----Speaking-----
  {
    path: "/child/speaking/record",
    component: () => import("../modules/child/speaking/RecordVoice.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/child/speaking/result",
    component: () => import("../modules/child/speaking/PronunciationResult.vue"),
    meta: { layout: "client" },
  },

  //-----Listening-----
  {
    path: "/child/listening/listen-and-choose",
    component: () => import("../modules/child/listening/ListenAndChoose.vue"),
    meta: { layout: "client" },
  },

  //-----Review-----
  {
    path: "/child/review/mistakes",
    component: () => import("../modules/child/review/ReviewMistakes.vue"),
    meta: { layout: "client" },
  },

  //-----Reward-----
  {
    path: "/child/reward/achievement",
    component: () => import("../modules/child/reward/Achievement.vue"),
    meta: { layout: "client" },
  },

  //-----Tracking-----
  {
    path: "/child/tracking/progress",
    component: () => import("../modules/child/tracking/progress/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/child/tracking/history",
    component: () => import("../modules/child/tracking/history/index.vue"),
    meta: { layout: "client" },
  },

  //-----Profile-----
  {
    path: "/child/profile",
    component: () => import("../modules/child/profile/Profile.vue"),
    meta: { layout: "client" },
  },

  //-------------------------------------------PARENT--------------------------------------------------------------
  {
    path: "/parent/dashboard",
    component: () => import("../modules/parent/dashboard/ParentDashboard.vue"),
    meta: { layout: "parent" },
  },
  {
    path: "/parent/child",
    component: () => import("../modules/parent/child/ChildList.vue"),
    meta: { layout: "parent" },
  },
  {
    path: "/parent/child/detail",
    component: () => import("../modules/parent/child/ChildDetail.vue"),
    meta: { layout: "parent" },
  },
  {
    path: "/parent/progress",
    component: () => import("../modules/parent/progress/ProgressOverview.vue"),
    meta: { layout: "parent" },
  },
  {
    path: "/parent/pronunciation-report",
    component: () => import("../modules/parent/progress/PronunciationReport.vue"),
    meta: { layout: "parent" },
  },
  {
    path: "/parent/history",
    component: () => import("../modules/parent/history/PracticeHistory.vue"),
    meta: { layout: "parent" },
  },
  {
    path: "/parent/recommendation",
    component: () => import("../modules/parent/recommendation/HomePracticeSuggestion.vue"),
    meta: { layout: "parent" },
  },
  {
    path: "/parent/alerts",
    component: () => import("../modules/parent/notification/Alerts.vue"),
    meta: { layout: "parent" },
  },

  //-------------------------------------------TEACHER--------------------------------------------------------------
  {
    path: "/teacher/dashboard",
    component: () => import("../modules/teacher/dashboard/TeacherDashboard.vue"),
    meta: { layout: "teacher" },
  },
  {
    path: "/teacher/lesson",
    component: () => import("../modules/teacher/lesson/LessonList.vue"),
    meta: { layout: "teacher" },
  },
  {
    path: "/teacher/lesson/create",
    component: () => import("../modules/teacher/lesson/LessonCreate.vue"),
    meta: { layout: "teacher" },
  },
  {
    path: "/teacher/lesson/edit",
    component: () => import("../modules/teacher/lesson/LessonEdit.vue"),
    meta: { layout: "teacher" },
  },
  {
    path: "/teacher/vocabulary",
    component: () => import("../modules/teacher/vocabulary/VocabularyList.vue"),
    meta: { layout: "teacher" },
  },
  {
    path: "/teacher/vocabulary/create",
    component: () => import("../modules/teacher/vocabulary/VocabularyCreate.vue"),
    meta: { layout: "teacher" },
  },
  {
    path: "/teacher/practice/create",
    component: () => import("../modules/teacher/practice-builder/PracticeCreate.vue"),
    meta: { layout: "teacher" },
  },

  //-------------------------------------------ADMIN--------------------------------------------------------------
  {
    path: "/admin/dashboard",
    component: () => import("../modules/admin/dashboard/AdminDashboard.vue"),
    meta: { layout: "admin" },
  },
  {
    path: "/admin/user",
    component: () => import("../modules/admin/user/UserList.vue"),
    meta: { layout: "admin" },
  },
  {
    path: "/admin/user/detail",
    component: () => import("../modules/admin/user/UserDetail.vue"),
    meta: { layout: "admin" },
  },
  {
    path: "/admin/teacher",
    component: () => import("../modules/admin/teacher/TeacherManagement.vue"),
    meta: { layout: "admin" },
  },
  {
    path: "/admin/content/subject",
    component: () => import("../modules/admin/content/SubjectManagement.vue"),
    meta: { layout: "admin" },
  },
  {
    path: "/admin/content/vocabulary",
    component: () => import("../modules/admin/content/VocabularyManagement.vue"),
    meta: { layout: "admin" },
  },
  {
    path: "/admin/practice",
    component: () => import("../modules/admin/practice/PracticeManagement.vue"),
    meta: { layout: "admin" },
  },
  {
    path: "/admin/role",
    component: () => import("../modules/admin/role/RoleList.vue"),
    meta: { layout: "admin" },
  },
  {
    path: "/admin/role/permission",
    component: () => import("../modules/admin/role/PermissionMatrix.vue"),
    meta: { layout: "admin" },
  },
  {
    path: "/admin/statistics",
    component: () => import("../modules/admin/statistics/SystemStats.vue"),
    meta: { layout: "admin" },
  },
  {
    path: "/admin/ai",
    component: () => import("../modules/admin/ai/AIMonitor.vue"),
    meta: { layout: "admin" },
  },

  //-------------------------------------------404--------------------------------------------------------------
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;