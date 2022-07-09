// 路由-相关模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Order from '@/views/Order'
import Home from '@/views/Home'
import Sort from '@/views/Sort';
import My from '@/views/My'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/sort',
        component: Sort
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/my',
        component: My
    },

]

const router = new VueRouter({
    routes
})

export default router