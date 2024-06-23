import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Login from '../pages/Login/Index.vue'
// import Apply from '../pages/Apply/Detail.vue'
import Home from '../pages/Home/Index.vue'
// import Msg from '../pages/Message/Index.vue'
// import Mine from '../pages/Mine/Index.vue'
const routers: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    // {
    //     path: '/apply/:id',
    //     name: 'Apply',
    //     component: Apply,
    //     meta: {
    //         title: 'Apply'
    //     }
    // }, {
    //     path: '/msg',
    //     name: 'Msg',
    //     component: Msg,
    //     meta: {
    //         title: 'Msg'
    //     }
    // }, {
    //     path: '/mine',
    //     name: 'Mine',
    //     component: Mine,
    //     meta: {
    //         title: 'Mine'
    //     }
    
    // }, {
    //     path: '/login',
    //     name: 'Login',
    //     component: Login,
    //     meta: {
    //         title: 'Login'
    //     }
    // },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routers,
})
export default router
