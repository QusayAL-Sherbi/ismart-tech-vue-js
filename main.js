import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "./sass/main.scss";

createApp(App).use(store).mount("#app");