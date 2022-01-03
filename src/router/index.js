import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Object from '../views/Items.vue'
import Register from '../views/Register'
import TermsofService from '../views/TermsofService'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/object',
    name: 'Object',
    component: Object
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/termsofservice',
    name: 'TermsofService',
    component: TermsofService
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
