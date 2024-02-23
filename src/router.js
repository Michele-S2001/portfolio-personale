import { createRouter, createWebHistory } from 'vue-router';

import PortfolioHome from './pages/PortfolioHome.vue';

const router = createRouter({
  history: createWebHistory('/portfolio-personale'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PortfolioHome
    }
  ]
});

export { router };