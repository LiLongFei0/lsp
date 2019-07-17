import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            path: '/',
            name: '个人中心',
            component: () => import('./../views/home.vue')
        },
        {
            path: '/gtwo',
            name: '图表',
            component: () => import('./../views/gtwo.vue')
        },
        {
            path: '/sliing',
            name: '切图',
            component: () => import('./../views/sliing.vue')
        }
    ]
})