import 'babel-polyfill'
import Vue from 'vue'

import ElementUI from 'element-ui';

//修改element-ui的主题色
import '@/assets/css/_elementcss.scss';

import App from './App.vue'
import router from './router/index.js'
Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
