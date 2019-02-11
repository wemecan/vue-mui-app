
import Vue from 'vue'
import App from './App.vue'
import { Header, Button } from "mint-ui";
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
