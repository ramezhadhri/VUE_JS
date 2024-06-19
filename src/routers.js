import Home from "./components/Home.vue";
import SignUp from "./components/signUp.vue";
import LogIn from "./components/login.vue";
import Add from "./components/Add.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LogIn",
    component: LogIn,
    path: "/log-in",
  },
  {
    name: "Add",
    component: Add,
    path: "/Add",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
