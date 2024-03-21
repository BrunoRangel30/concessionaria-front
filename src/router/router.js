// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/indexHome.vue';
import CardCarPage from '../views/CardCarPage.vue';
import Sobre from '../views/sobrePage.vue';

const routes = [
  {
    path: '/carro/:modelo/:id',
    name: 'carro',
    component: CardCarPage
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre-empresa',
    name: 'Sobre',
    component: Sobre
  },
  // Adicione outras rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
