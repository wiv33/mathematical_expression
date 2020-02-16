import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import ES6Promise from "es6-promise";

Vue.config.productionTip = false;
// Vue.prototype.$axios = axios;
ES6Promise.polyfill();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
