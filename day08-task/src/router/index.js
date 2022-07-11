// 路由-相关模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Order from '@/views/Order'
import Home from '@/views/Home'
import Sort from '@/views/Sort';
import My from '@/views/My'
// 二级路由
import Recommend from '@/views/second/Recommend';
import Today from '@/views/second/Today';

// 三级路由
import Info from '@/views/third/Info';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
        children:[
            {
                path: 'recommend',
                component: Recommend,
                children:[
                    {
                        path: 'info',
                        component: Info,
                    }
                ]
            },
            {
                path: 'today',
                component:Today,
            }
        ]
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