import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:notFount(.*)',
      name: '404',
      meta: {
        auth: false
      },
      component: () => import('@/views/error/Error404.vue')
    }
  ]
})

export function setupRouter(app: App) {
  app.use(router)
}
