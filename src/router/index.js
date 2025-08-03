import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
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
    path: '/Week1-1',
    name: 'Week1-1',
    component: () => import('../views/Week1-1.vue')
  },
  {
    path: '/Week1-2',
    name: 'Week1-2',
    component: () => import('../views/Week1-2.vue')
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
