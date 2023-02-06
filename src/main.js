import { createApp } from 'vue'
import App from '../components/App.vue'
import './assets/main.css'

import store from '../store'

createApp(App).mount('#app').use(store)
