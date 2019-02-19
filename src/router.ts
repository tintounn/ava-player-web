import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Account from './views/Account.vue';
import Splash from './views/Splash.vue';
import PageNotFound from './views/PageNotFound.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {path: '', name:'home', component: () => import('./views/Movies.vue')},
        {path: '/movies/:id', name:'movie', component: () => import('./views/Movie.vue')},
        {
          path: '/account', 
          component: Account,
          children: [
            {path: '', name: 'account', component: () => import('./views/Account/General.vue')},
            {path: '/security', name: 'security', component: () => import('./views/Account/Security.vue')},
            {path: '/admin', name: 'admin', component: () => import('./views/Account/Admin.vue')}
          ]
        }
      ]
    },
    {
      path: '/splash',
      name: 'splash',
      component: Splash
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register/:token',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
});

const path = window.location.pathname;

if(path.indexOf('/register') === -1) {
  router.push({name: 'splash', query: {redirect: path}});
}

export default router;


