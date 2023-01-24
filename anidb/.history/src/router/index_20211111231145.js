import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AnimeDetail from '../views/AnimeDetail.vue'

const routes = [
  {
    path: '/b',
    name: 'Home',
    component: Home
  },
  {
    path: '/anime/:id',
    name: 'Anime Details',
    component: AnimeDetail
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
