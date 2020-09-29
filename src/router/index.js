import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import {store} from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('SET_TRANSITION_STATE', true);
  store.dispatch('HISTORY_ADD_ROUTE', to.path);
  
  setTimeout(next, 600);
});

router.afterEach(() => {
  store.dispatch('SET_TRANSITION_STATE', false);
})

export default router
