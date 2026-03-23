import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/module/mod-00-sources'
  },
  {
    path: '/module/:moduleId',
    name: 'module',
    component: () => import('../components/modules/ModuleWrapper.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
