import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/sass/main.scss';
import 'normalize.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import SweetModal from 'sweet-modal-vue/src/plugin.js'

Vue.use(SweetModal)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


