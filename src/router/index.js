import { createRouter, createWebHistory } from 'vue-router'
import bmi from '../views/Bmi.vue'

const routes = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/bmi',
    name: 'bmi',
    component: bmi
  },
  {
    path: '/test2',
    name: 'Test2',
    component: () => import('../views/Test2.vue')
  },
  {
    path: '/test3',
    name: 'Test3',
    component: () => import('../views/Test3.vue')
  },
  // {
  //   path: '*',
  //   name: '404',
  //   component: () => import('../404.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
