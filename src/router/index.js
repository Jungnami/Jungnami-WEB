import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Main'
import Legislator from '@/pages/legislator/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/legislator',
      name: 'Legislator',
      component: Legislator
    }
  ]
})
