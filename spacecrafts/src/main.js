import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/popper";
import "jquery/dist/jquery.slim";
import "./css/style.css";
import router from "./router";
import store from "./store/index";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
