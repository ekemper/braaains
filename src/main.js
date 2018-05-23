import Vue from 'vue'
import App from './App'
import 'es6-promise/auto'
import Vuex from 'vuex'

import store from './store/index.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  components: { App },
  template: '<App/>',
})
