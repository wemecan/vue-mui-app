
import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdTabs } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import 'vue-material/dist/theme/default.css'
Vue.use(MdButton);
Vue.use(MdTabs);
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
