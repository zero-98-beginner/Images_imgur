import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { store } from "./store"
import App from './App.vue'
import AuthHandler from "./components/AuthHandler"
import ImageList from "./components/ImageList"
import UploadForm from "./components/UploadForm"

export const router = createRouter({
    history: createWebHistory('/base-directory/'),
    routes: [
        { path: "/", component: ImageList },
        { path: "/upload", component: UploadForm },
        { path: '/oauth2/callback', component: AuthHandler }
    ],

});


export const eventBus = createApp(App)
createApp(App).use(store).use(router).mount('#app')