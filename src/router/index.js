import Vue from 'vue'
import Router from 'vue-router'
import HelloMars from '@/components/HelloMars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloMars',
      component: HelloMars
    }
  ]
})
