import { createRouter, createWebHistory } from "vue-router";
import UserListComponent from "@/components/UserListComponent.vue";
import BookListComponent from "@/components/BookListComponent.vue";
import MovieListComponent from "@/components/MovieListComponent.vue";
import NotFound from "@/components/NotFound.vue"
import CatalogComponent from "@/components/CatalogComponent.vue"

const routes = [
    {
        path: '/',
        name: 'homePage',
        component: UserListComponent
    },
    {
        path: '/books',
        name: 'booksPage',
        component: BookListComponent
    },
    {
        path: '/films',
        name: 'moviesPage',
        component: MovieListComponent
    },
    {
        path: '/catalog/:pageNumber?', // : указывает, что параметр динамический, т.е. pageNumber может меняться, а знак ? означает, что он может отсутствовать (pageNumber может и не быть)
        name: 'catalog',
        component: CatalogComponent
    },
    {
        path: '/:CatchAll(.*)',     // : означает, что путь динамический
        name: '404',
        component: NotFound
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