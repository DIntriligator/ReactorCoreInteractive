import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home/Home.vue'),
    },
    {
      path: '/game/:id',
      name: 'GameDetails',
      props: true,
      component: () => import('../components/GamePage/GamePage.vue'),
    }
  ],
})

export default router
