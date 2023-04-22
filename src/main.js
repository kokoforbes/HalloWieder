import { createApp } from "vue";
import "./style.css";
import store from "./store";
import Router from "./router";
import App from "./App.vue";
import Notifications from "@kyvg/vue3-notification";

createApp(App).use(Router).use(store).use(Notifications).mount("#app");
