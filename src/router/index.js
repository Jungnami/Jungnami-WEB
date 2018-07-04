import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Main'
import Legislator from '@/pages/legislator/Main'
import LegislatorList from '@/pages/legislator_list/Main'

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
    },
    {
      path: '/list',
      name: 'LegislatorList',
      component: LegislatorList
    }
  ]
})
