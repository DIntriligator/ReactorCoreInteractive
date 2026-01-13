import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
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
    },
    {
      path: '/game/:id/press-kit',
      name: 'PressKit',
      props: true,
      component: () => import('../components/PressKit/PressKit.vue'),
    },
  ],
})

export default router
