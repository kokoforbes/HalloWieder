import { createApp } from "vue";
import "./style.css";
import store from "./store";
import Router from "./router";
import App from "./App.vue";

createApp(App).use(Router).use(store).mount("#app");
