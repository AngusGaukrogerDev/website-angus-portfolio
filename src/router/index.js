import { createRouter, createWebHistory } from 'vue-router';

import Home from '/src/components/Home.vue';
import About from '/src/components/PortElements/About.vue';

import Contact from '/src/components/PortElements/Contact.vue';
import CV from '/src/components/PortElements/CV.vue';
import Goals from '/src/components/PortElements/Goals.vue';
import Quotes from '/src/components/PortElements/Quotes.vue';
import Projects from '/src/components/PortElements/Projects.vue';
import Stack from '/src/components/PortElements/Stack.vue';
import Travel from '/src/components/PortElements/Travel.vue';

import Colombia from '/src/components/PortElements/TravelDestinations/Colombia.vue'
import Ecuador from '/src/components/PortElements/TravelDestinations/Ecuador.vue'
import Peru from '/src/components/PortElements/TravelDestinations/Peru.vue'
import Spain from '/src/components/PortElements/TravelDestinations/Spain.vue'

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
        path: '/Quotes',
        name: 'Quotes',
        component: Quotes,
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
    {
        path: '/Travel/Colombia',
        name: 'Colombia',
        component: Colombia,
    },
    {
        path: '/Travel/Ecuador',
        name: 'Ecuador',
        component: Ecuador,
    },
    {
        path: '/Travel/Peru',
        name: 'Peru',
        component: Peru,
    },
    {
        path: '/Travel/Spain',
        name: 'Spain',
        component: Spain,
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;