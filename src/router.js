import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import(/* webpackChunkName: "about" */ './views/Computed.vue')
    },
    {
      path: '/logic',
      name: 'logic',
      component: () => import(/* webpackChunkName: "about" */ './views/Logic.vue')
    }
  ]
})
