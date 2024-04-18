import { createRouter, createWebHistory } from "vue-router";

import Chat from "../components/MenuItems/Chat.vue";
import Promos from "../components/MenuItems/Promos.vue";
import Companies from "../components/MenuItems/Companies.vue";
import Users from "../components/MenuItems/Users.vue";
import Login from "../components/Login.vue";

const routes = [
  { path: "/", component: Login, name: "Login" },
  { path: "/chat", component: Chat, name: "Chat" },
  { path: "/promos", component: Promos, name: "Promos" },
  { path: "/companies", component: Companies, name: "Companies" },
  { path: "/users", component: Users, name: "Users" },
  { path: "/chat", component: Chat, name: "Chat" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
