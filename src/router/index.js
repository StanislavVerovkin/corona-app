import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use( VueRouter );

const routes = [
  {
    path: '/', redirect: { name: 'List' }
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../components/countries/List')
  },
  // {
  //   path: '/country/:name',
  //   props: true,
  //   name: 'Charts',
  //   component: () => import('../components/history/charts/Trend')
  // }
];

const router = new VueRouter(
  {
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
  }
);

export default router
