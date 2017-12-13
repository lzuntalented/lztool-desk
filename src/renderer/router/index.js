import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/encrypt',
      name: 'encrypt-page',
      component: require('@/pages/encrypt/indexPage').default
    },
    {
      path: '/qrcode',
      name: 'qrcode-page',
      component: require('@/pages/qrcode/indexPage').default
    },
    {
      path: '/code',
      name: 'code-page',
      component: require('@/pages/code/indexPage').default
    },
    {
      path: '/time',
      name: 'time-page',
      component: require('@/pages/time/indexPage').default
    },
    {
      path: '/json',
      name: 'json-page',
      component: require('@/pages/json/indexPage').default
    },
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
