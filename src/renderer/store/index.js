import Vue from 'vue'
import Vuex from 'vuex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import modules from './modules'

Vue.use(ElementUI)
Vue.use(Vuex)
console.log(modules);
export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
