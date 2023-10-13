import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/profile',
    component: () => import('../components/profile.vue')
  },
  {
    path: '/cart',
    component: () => import('../components/cart.vue')
  },
  {
    path: '/shop',
    component: () => import('../components/shop.vue')
  },
  {
    path: '/changeprofile',
    component: () => import('../components/changeprofile.vue')
  },
  {
    path: '/product',
    component: () => import('../components/product.vue')
  },
]

const router = createRouter({
  history: routerHistory,
  routes,
})

export default router
