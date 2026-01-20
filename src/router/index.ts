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
    {
      path: '/game/jovian-jump/privacy-policy',
      name: 'PrivacyPolicy',
      component: () => import('../components/PrivacyPolicies/JovianJumpPrivacyPolicy.vue'),
    }
  ],
})

export default router
