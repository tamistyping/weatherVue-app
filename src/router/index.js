import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import City from '../views/City.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/weather/:county/:city',
      name: 'city',
      component: City
    }
  ]
})

export default router
