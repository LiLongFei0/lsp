import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
		{
			path: '/',
			name: "登录",
			component: () => import('../views/index.vue')
		},
    ]
})