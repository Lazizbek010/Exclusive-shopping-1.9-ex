import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: ()=> import('../views/HomeView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: ()=> import('../views/AboutView.vue')
        },
      ]
    },
    
  ]
})

export default router
