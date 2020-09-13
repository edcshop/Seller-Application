import Vue from 'vue'
import Router from 'vue-router'
import StepOne from '@/components/StepOne'
import StepTwo from '@/components/StepTwo'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StepOne',
      component: StepOne
    },
    {
      path: '/StepTwo',
      name: 'StepTwo',
      component: StepTwo
    },
    {
      path: '/Result',
      name: 'Result',
      component: Result
    }
  ]
})
