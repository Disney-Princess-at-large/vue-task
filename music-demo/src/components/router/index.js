// 路由-相关模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Play from '@/views/Play'
import Search from '@/views/Search'



Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        redirect: '/layout/home',
        component: Layout,
        children: [
            {
                path: 'home',
                component: Home,
                meta: {
                    title: '首页'
                  },
            },
            {
                path: 'search',
                component: Search,
                meta: {
                    title: '搜索'
                  },
            }
]
    },
    {
        path: '/play',
        component: Play,
    }
]

const router = new VueRouter({
    routes
})

export default router