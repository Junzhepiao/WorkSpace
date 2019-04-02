// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import '@mdi/font/css/materialdesignicons.css' 
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import store from './store'
require('vuetify/dist/vuetify.min.css')

Vue.use(Vuetify, {
  iconfont: 'mdi'
})
Vue.use(require('vue-moment'));

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
