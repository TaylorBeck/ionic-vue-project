import { createRouter, createWebHistory } from "@ionic/vue-router";
import UsersPage from "../pages/UsersPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/users"
  },
  {
    path: "/users",
    component: UsersPage
  },
  {
    path: "/users/:id",
    component: () => import("../pages/UserDetailsPage.vue")
  },
  {
    path: "/users/create",
    component: () => import("../pages/CreateUserPage.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
