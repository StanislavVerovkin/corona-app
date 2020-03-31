import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueNumber from 'vue-number-animation'
import Trend from "vuetrend";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use( VueResource );
Vue.use( BootstrapVue );
Vue.use( VueNumber );
Vue.use( Trend );

new Vue(
  {
    router,
    store,
    render: h => h( App )
  }
).$mount( '#app' );
