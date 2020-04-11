import Vue from 'vue';
import Vuex from 'vuex';

import list from './list';
import chart from './chart';

Vue.use( Vuex );

export default new Vuex.Store( {
    modules: {
      list,
      chart,
    }
  }
)
