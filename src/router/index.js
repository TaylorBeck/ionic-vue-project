import { createRouter, createWebHistory } from "@ionic/vue-router";
import StudentsPage from "../pages/students/StudentsPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/students"
  },
  {
    path: "/students",
    component: StudentsPage
  },
  {
    path: "/students/:id",
    component: () => import("../pages/students/StudentDetailsPage.vue")
  },
  {
    path: "/students/create",
    component: () => import("../pages/students/CreateStudentPage.vue")
  },
  {
    path: "/students/:id/edit",
    component: () => import("../pages/students/EditStudentPage.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
