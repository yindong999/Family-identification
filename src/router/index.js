import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:()=>import('@/views/index')
    },
    {
      path:'/search',
      name:'search',
      component:()=>import('@/views/search')
    },
    {
      path:'/detail',
      name:'detail',
      component:()=>import('@/views/detail')
    },
    {
      path:'/map',
      name:'map',
      component:()=>import('@/views/map')
    },
  ]
})
