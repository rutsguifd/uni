import VueRouter from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import LessonFormPage from '../pages/LessonFormPage.vue';
import AboutPage from '../pages/AboutPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },
  {
    path: '/add',
    component: AboutPage,
    name: 'productList',
  },
  {
    path: '/list',
    component: LessonFormPage,
    name: 'form',
  },
];

const router = new VueRouter({
  routes,
});

export default router;