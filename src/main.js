import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueNumber from 'vue-number-animation'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import * as fb from 'firebase/app';

Vue.config.productionTip = false;

Vue.use( VueResource );
Vue.use( BootstrapVue );
Vue.use( VueNumber );

new Vue(
  {
    router,
    store,
    render: h => h( App ),
    created () {
      fb.initializeApp( {
          apiKey: "AIzaSyC-XnI83nFFRLFXnG2qx_4v5Y2LfKQ6v2A",
          authDomain: "corona-app-97beb.firebaseapp.com",
          databaseURL: "https://corona-app-97beb.firebaseio.com",
          projectId: "corona-app-97beb",
          storageBucket: "corona-app-97beb.appspot.com",
          messagingSenderId: "536445879140",
          appId: "1:536445879140:web:021147ea5cec2997c57071"
        }
      );
    }
  }
).$mount( '#app' );
