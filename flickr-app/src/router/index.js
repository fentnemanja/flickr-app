import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Collection from '@/components/Collection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/collections',
      name: 'Collection',
      component: Collection
    }
  ]
})
