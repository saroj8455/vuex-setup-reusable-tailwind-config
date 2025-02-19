import '@/assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

// Install the store instance as a plugin
app.use(store);
app.use(router);

app.mount('#app');
