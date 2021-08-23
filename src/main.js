import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/index.css";

import createServer from "./api/mock";

if (process.env.NODE_ENV === "development") {
  createServer();
}

createApp(App).use(store).use(router).mount("#app");
