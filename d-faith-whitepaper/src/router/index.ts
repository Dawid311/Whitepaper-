import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tokenomics',
      name: 'tokenomics',
      component: () => import('../views/TokenomicsView.vue'),
    },
    {
      path: '/ecosystem',
      name: 'ecosystem',
      component: () => import('../views/EcosystemView.vue'),
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: () => import('../views/RoadmapView.vue'),
    },
  ],
})

export default router
