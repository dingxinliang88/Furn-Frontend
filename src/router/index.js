import { createRouter, createWebHistory } from 'vue-router'
import FurnView from '../views/FurnView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/furn',
    name: 'furn',
    component: FurnView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
