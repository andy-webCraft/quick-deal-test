import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView.vue";
import TasksListView from "@/views/TasksListView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tasks",
      name: "tasks-list",
      component: TasksListView,
    },
    {
      path: "/*",
      name: "not-found",
      redirect: "/",
    },
  ],
});

export default router;
