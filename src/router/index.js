import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import User from "../views/User.vue";
import CreateUser from "../views/CreateUser.vue";
const routes = [
  {
    path: "/",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/createuser",
    name: "CreateUser",
    component: CreateUser,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
