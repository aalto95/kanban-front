import { createApp } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import App from "./App.vue";
import router from "./router";
import "virtual:windi.css";
import "virtual:windi-devtools";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(autoAnimatePlugin);
app.use(router);

app.mount("#app");
