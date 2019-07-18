import 'babel-polyfill'
import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import App from './App.vue'
import router from './router/index.js'
Vue.config.productionTip = false

import api from '@/api/install'
Vue.use(api)

Vue.use(ElementUI);
require("./mock.js")
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
