import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import StationForm from '../views/StationForm.vue'


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
    path: '/station-form',
    name: 'StationForm',
    component: StationForm
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
