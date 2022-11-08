/*
 * @Description:
 * @Author: wss
 * @Date: 2022-08-07 17:51:48
 * @LastEditTime: 2022-08-07 19:40:38
 * @LastEditors: wss
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/layout",
  },
  {
    path: "/layout",
    component: () => import("../layout/Index.vue"),
  },
  {
    path: "/about",
    component: () => import("../layout/About.vue"),
  },
  {
    path: "/article/:id",
    component: () => import("../components/Article.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
