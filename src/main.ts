import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import '@/style/scrollbar.scss';
import router from './router/index';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(router).use(createPinia());

app.mount('#app');
