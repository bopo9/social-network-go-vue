import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from "@/router";
import VueSweetalert2 from "vue-sweetalert2";
import mdiVue from 'mdi-vue/v2'
import * as mdijs from '@mdi/js'


Vue.use(mdiVue, {
  icons: mdijs
})

Vue.use(VueSweetalert2);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
