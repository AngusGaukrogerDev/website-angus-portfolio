import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/components/Home.vue';
import About from '/src/components/PortElements/About.vue';

import Contact from '/src/components/PortElements/Contact.vue';
import CV from '/src/components/PortElements/CV.vue';
import Goals from '/src/components/PortElements/Goals.vue';
import Music from '/src/components/PortElements/Music.vue';
import Projects from '/src/components/PortElements/Projects.vue';
import Stack from '/src/components/PortElements/Stack.vue';
import Travel from '/src/components/PortElements/Travel.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/About',
        name: 'About',
        component: About,
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/CV',
        name: 'CV',
        component: CV,
    },
    {
        path: '/Goals',
        name: 'Goals',
        component: Goals,
    },
    {
        path: '/Music',
        name: 'Music',
        component: Music,
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/Stack',
        name: 'Stack',
        component: Stack,
    },
    {
        path: '/Travel',
        name: 'Travel',
        component: Travel,
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;