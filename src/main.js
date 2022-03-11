import { createApp } from 'vue';
import App from './App.vue';
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

App.use(MdButton)
App.use(MdContent)
App.use(MdTabs)

createApp(App).mount('#app');
