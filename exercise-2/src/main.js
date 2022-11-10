import { createApp } from 'vue'
import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App);
// app.component('BootstrapVue', BootstrapVue);
app.mount('#app')
