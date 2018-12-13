import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Search from '@/components/Search'
import Collections from '@/components/Collections-page'
import Explore from '@/components/Explore-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/collections',
      name: 'Collections',
      component: Collections
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore
    }
  ]
})
