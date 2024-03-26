import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "@/pages/DashBoard.vue";
import AboutContent from "@/pages/AboutContent.vue";
import NotFound from "@/pages/NotFound.vue";


const routes = [  // здесь будут все маршруты
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashBoard
    },
    {
        path: '/about*', // * означает, что полсе about может быть любой контент
        name: 'about',
        component: AboutContent
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '*', // * означает, что может быть любой контент
        redirect: '/404'
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
        }
    }
})

export default router