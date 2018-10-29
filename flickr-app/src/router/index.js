import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Collection from '@/components/Collection'
import Collections from '@/components/Collections-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/collections',
      name: 'Collections-page',
      component: Collections
    }
  ]
})
