import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import productView from '../views/productView.vue'
import personView from '../views/personView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/person',
      name: 'person',
      component: personView,
    },
    {
      path: '/product:id',
      name: 'product',
      component: productView,
    },
   
  ],
})

export default router
