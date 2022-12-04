import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {MotionPlugin} from '@vueuse/motion';

createApp(App).use(MotionPlugin).use(router).use(store).use(AOS.init()).mount('#app')
