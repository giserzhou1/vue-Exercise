import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import admin from '@/components/admin'
import diary from '@/components/diary'
import navigation from '@/components/navigation'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'main',
        component: main,
        redirect: '/nav',
        children: [{
                path: 'nav',
                name: 'navigation',
                component: navigation
            },
            {
                path: 'diary',
                name: 'diary',
                component: diary
            },
            {
                path: 'admin',
                name: 'admin',
                component: admin
            },
        ]
    }]
})