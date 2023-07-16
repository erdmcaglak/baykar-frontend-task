import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
