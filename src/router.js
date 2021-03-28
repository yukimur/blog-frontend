
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Blog from './views/Blog'
import BlogDetail from './views/BlogDetail'

Vue.use(VueRouter);


export default new VueRouter({
    mode: 'history',
    // base: "http://127.0.0.1:8080",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/blogdetail/:id',
            component: BlogDetail
        },
    ]
})