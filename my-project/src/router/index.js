import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage'
import CatalogPage from '@/views/CatalogPage'
import CartPage from '@/views/CartPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogPage,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
