import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import Spacecraft from "./pages/Spacecraft";
import DetailSpacecraft from "./pages/DetailSpacecraft";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

const routes = [
  { path: "/", component: Home },
  { path: "/spacecrafts", component: Spacecraft },
  { path: "/spacecrafts/:id", component: DetailSpacecraft },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
