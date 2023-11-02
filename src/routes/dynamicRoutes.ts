import type {RouteRecordRaw} from 'vue-router';

export default [
    {
        path: '/user',
        redirect: '/user/center',
        name: 'user',
        meta: {
            title: '个人页',
            locale: 'menu.user',
        },
        // component: basicRouteMap.RouteView,
        children: [
            {
                path: '/user/center',
                name: 'userCenter',
                component: () => import('@/views/user/center.vue'),
                meta: {
                    title: '个人主页',
                    locale: 'menu.user.center',
                },
            },
            {
                path: '/user/settings',
                name: 'userSettings',
                component: () => import('@/views/user/settings.vue'),
                meta: {
                    title: '个人设置',
                    locale: 'menu.user.settings',
                },
            },

        ],
    },

] as RouteRecordRaw[]
