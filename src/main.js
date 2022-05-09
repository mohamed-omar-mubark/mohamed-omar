import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Font Awesome
import "@fortawesome/fontawesome-free/js/all";

// Normalize
import "normalize.css";

// Css
import "./css/app.css";

createApp(App).use(store).use(router).mount("#app");
