import Vue from 'vue';
import App from './App.vue';
import store from './vuex/';
import routes from './config/routes';
import VueRouter from 'vue-router';
import iView from 'iview';
// import './config/rem';

// //开启debug模式
// Vue.config.debug = true;
console.log('document.documentElement.clientWidth',document.documentElement.clientWidth);
Vue.use(VueRouter);
Vue.use(iView);
// Vue.prototype.$http = axios;

const router = new VueRouter({
  mode:'history',
  routes,
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
