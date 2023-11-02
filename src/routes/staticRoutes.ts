import type {RouteRecordRaw} from 'vue-router';
import {LOGIN_URL, HOME_URL} from "@/config/index.ts"
import Layout from '@/layouts/index.vue'
import dynamicRoutes from "@/routes/dynamicRoutes.ts";

export default [
    {
        path: "/",
        redirect: HOME_URL,
    },
    {
        path: LOGIN_URL,
        component: import('@/views/login/index.vue'),
        meta: {
            "title": '登录',
        },
    },
    {
        path: HOME_URL,
        component: Layout,
        meta: {
            "title": '首页',
        },
        children: dynamicRoutes
    },

] as RouteRecordRaw[]
