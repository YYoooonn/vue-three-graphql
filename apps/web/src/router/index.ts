import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/about',
    component: () => import('@/pages/AboutPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router