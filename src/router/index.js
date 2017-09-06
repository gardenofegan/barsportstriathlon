import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import triathletes from '@/components/triathletes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/triathletes',
      component: triathletes
    }
  ]
})
