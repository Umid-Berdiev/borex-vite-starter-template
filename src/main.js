import {
  createApp
} from "vue";
import App from "./App.vue";
import * as EvaIcons from "@stefandesu/eva-icons-vue"
import router from "./router";
import ActionCableVue from "actioncable-vue";
import BootstrapVue3 from 'bootstrap-vue-3';
import VueApexCharts from "vue3-apexcharts";
import vClickOutside from "click-outside-vue3"
import Maska from 'maska'

import 'sweetalert2/dist/sweetalert2.min.css';
import '@vueform/slider/themes/default.css';
import './assets/scss/custom/plugins/mermaid.min.css'

import store from "./state/store";

import "./assets/scss/app.scss";

const websocketOptions = {
  debug: true,
  debugLevel: "error",
  connectionUrl: "http://localhost:8080/",
  connectImmediately: false
};

createApp(App)
  .use(store)
  .use(EvaIcons)
  .use(router)
  .use(BootstrapVue3)
  .use(VueApexCharts)
  .use(vClickOutside)
  .use(Maska)
  .use(ActionCableVue, websocketOptions)
  .mount("#app");