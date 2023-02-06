import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import store from '../store'

createApp(App).mount('#app').use(store)
