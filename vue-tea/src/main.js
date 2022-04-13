import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//* 公共CSS文件
import "./assets/css/common.css";
//* 阿里矢量图标库
import "./assets/iconfont/iconfont.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
