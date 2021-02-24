import Vue from "vue";
import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import store from "@/store";
import "@/axios";
import "@/assets/iconfont/iconfont";
import smoothScroll from "smoothscroll-polyfill";

smoothScroll.polyfill();
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
