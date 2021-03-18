import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "root",
  },
  {
    path: "/main",
    component: () => import("@/layouts/main.vue"),
    children: [
      {
        path: "/",
        name: "main",
        component: () => import("@/views/main.vue"),
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/errors/404.vue"),
  },
  // 일치하는 페이지가 없으면 404 페이지로 리다이렉션 합니다.
  {
    path: "*",
    redirect: "/404",
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
})

router.beforeEach(async (to, from, next) => {
  console.log("라우트 이동 경로 FROM ")
  console.log(from)
  console.log("라우트 이동 경로 TO")
  console.log(to)

  if (to.path === "/") {
    router.push({ name: "main" })
    return null
  }

  return next()
})
export default router
