import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";


import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/css/style.css";
import 'boxicons';
import 'glightbox';



const app = createApp(App);

app.use(createPinia());
app.use(router);
AOS.init();




app.mount("#app");