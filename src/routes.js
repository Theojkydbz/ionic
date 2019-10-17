import Vue from 'vue'
import Router from 'vue-router'

import PageHome from '@/pages/PageHome'
import HelloWorld from '@/pages/HelloWorld'

Vue.use(Router)

const router = new Router ({
    routes: [
        {
            path: '/',
            name:  'PageHome',
            component: PageHome
        },
        {
            path: '/hello',
            name:  'HelloWorld',
            component: HelloWorld
        }
    ],
    mode: 'history'
})





export default router
