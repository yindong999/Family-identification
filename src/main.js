import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import {$get,$post} from "./request/http.js"
import 'element-ui/lib/theme-chalk/index.css'
import "../node_modules/swiper/css/swiper.css"

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.$get = $get;
Vue.prototype.$post = $post;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
