// require('@/common/functions');

import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
// import store from './store/index.js'

//api挂载vue
import api from '@/api/install'
Vue.use(api)

//vue使用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引用全局样式
// import '@/assets/css/app.scss';

//引用过滤器
// import * as filters from '@/filters/index'
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// });

new Vue({
	router,
	// store,
	render: h => h(App)
}).$mount('#app')
