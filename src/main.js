// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state: {
    city: ''
  },
  mutations: {
    increment (state,msg) {
      state.city=msg
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
