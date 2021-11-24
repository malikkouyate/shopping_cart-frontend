import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Link from '../views/Link.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/link',
    name: 'Link',
    component: Link
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
