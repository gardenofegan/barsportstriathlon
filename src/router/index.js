import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import triathletes from '@/components/triathletes'
import triathlete from '@/components/triathlete'
import scoring from '@/components/scoring'
import rules from '@/components/rules'
import results from '@/components/results'
import bowlingRules from '@/components/bowling_rules'
import poolRules from '@/components/pool_rules'
import dartsRules from '@/components/darts_rules'

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
    },
    {
      path: '/triathlete/:id/',
      name: 'triathlete',
      component: triathlete
    },
    {
      path: '/scoring',
      component: scoring
    },
    {
      path: '/rules',
      component: rules,
      children: [
        {
          path: 'bowling-rules',
          component: bowlingRules
        },
        {
          path: 'pool-rules',
          component: poolRules
        },
        {
          path: 'darts-rules',
          component: dartsRules
        }
      ]
    },
    {
      path: '/results',
      component: results
    }
  ]
})
