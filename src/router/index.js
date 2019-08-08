import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import admin from '@/components/admin'
import diary from '@/components/diary'
import map from '@/components/map'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'main',
        component: main,
        children: [{
                path: 'map',
                name: 'map',
                component: map
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