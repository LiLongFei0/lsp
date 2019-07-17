import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            path: '/',
            name: '主页',
            component: () => import('./../views/indexa.vue')
        },
        {
            path: '/edit',
            name: '编辑器',
            component: () => import('./../views/edit.vue')
        }
    ]
})