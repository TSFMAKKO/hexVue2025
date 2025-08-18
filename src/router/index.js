import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import home from '../views/Home.vue'
import bmi from '../views/Bmi.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
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
  {
    path: '/Week2',
    name: 'Week2',
    component: () => import('../views/Week2.vue')
  },
    {
    path: '/Week3',
    name: 'Week3',
    component: () => import('../views/Week3.vue')
  },
    {
    path: '/Week4',
    name: 'Week4',
    component: () => import('../views/Week4.vue')
  },    {
    path: '/Week4-1',
    name: 'Week4-1',
    component: () => import('../views/Week4-1.vue')
  },
  {
    path: '/debug',
    name: 'debug',
    component: () => import('../views/debug.vue')
  },
  { path: '/:catchAll(.*)', redirect: '/' } // 加這行防止 404

]

const router = createRouter({
  history: createWebHashHistory('hexVue2025'), // 👈 用 hash 模式
  // history: createWebHistory('/hexVue2025/'),
  routes
})

export default router
