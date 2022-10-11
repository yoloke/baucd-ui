import { createApp } from "vue";

import App from "./App.vue";

import baucd from "../packages";

const app = createApp(App);
app.config.performance = true;


app.use(baucd).mount("#app");
