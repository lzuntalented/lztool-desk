import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/apitest',
      name: 'apitest-page',
      component: require('@/pages/apitest/indexPage').default
    },
    {
      path: '/markdown',
      name: 'markdown-page',
      component: require('@/pages/markdown/indexPage').default
    },
    {
      path: '/music',
      name: 'music-page',
      component: require('@/pages/music/indexPage').default
    },
    {
      path: '/regex',
      name: 'regex-page',
      component: require('@/pages/regex/indexPage').default
    },
    {
      path: '/urlEncode',
      name: 'urlEncode-page',
      component: require('@/pages/urlEncode/indexPage').default
    },
    {
      path: '/urlParam',
      name: 'urlParam-page',
      component: require('@/pages/urlParam/indexPage').default
    },
    {
      path: '/dateChange',
      name: 'dateChange-page',
      component: require('@/pages/dateChange/indexPage').default
    },
    {
      path: '/xmorse',
      name: 'xmorse-page',
      component: require('@/pages/xmorse/indexPage').default
    },
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
