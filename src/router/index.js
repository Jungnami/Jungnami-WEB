import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Main'
import Rank from '@/pages/rank/Main'
import Legislator from '@/pages/legislator/Main'
import Contents from '@/pages/contents/Main'
import Recommend from '@/pages/contents/components/Recommend'
import TMI from '@/pages/contents/components/TMI'
import Story from '@/pages/contents/components/Story'
import LegislatorList from '@/pages/legislator_list/Main'
import Region from '@/pages/legislator_list/components/Region'
import Party from '@/pages/legislator_list/components/Party'
import MyPage from '@/pages/mypage/Main'
import MyCoin from '@/pages/mypage/components/MyCoin'
import MyVote from '@/pages/mypage/components/MyVote'
import Scrap from '@/pages/mypage/components/Scrap'
import ContentsDetail from '@/pages/contents_detail/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/contents',
      name: 'Contents',
      component: Contents,
      children: [{
        path: '/',
        name: 'Recommend',
        component: Recommend
      },
      {
        path: 'TMI',
        name: 'TMI',
        component: TMI
      },
      {
        path: 'story',
        name: 'Story',
        component: Story
      }]
    },
    {
      path: '/mypage',
      name: 'MyPage',
      component: MyPage,
      children: [{
        path: '/',
        name: 'MyCoin',
        component: MyCoin
      },
      {
        path: 'myvote',
        name: 'MyVote',
        component: MyVote
      },
      {
        path: 'scrap',
        name: 'Scrap',
        component: Scrap
      }]
    },
    {
      path: '/list',
      name: 'LegislatorList',
      component: LegislatorList,
      children: [{
        path: 'region',
        name: 'Region',
        component: Region
      },
      {
        path: '/',
        name: 'Party',
        component: Party
      }]
    },
    {
      path: '/contentsDetail',
      name: 'ContentsDetail',
      component: ContentsDetail
    }
  ]
})
