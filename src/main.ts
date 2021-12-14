import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router';

import CollectionPage from './modules/books/containers/collection-page/collection-page.component.vue';
import FindBookPageComponent from './modules/books/containers/find-book-page/find-book-page.component.vue';
import store from './store';
import i18n from './i18n';

const routes = [
    { path: '/books', component: CollectionPage },
    { path: '/books/search', component: FindBookPageComponent },
    {
        path: '/:pathMatch(.*)',
        redirect: 'books'
    }
];

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});

createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .mount('#app');
