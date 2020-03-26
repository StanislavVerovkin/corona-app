import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use( VueResource );

/**
 * Get all users.
 *
 * @return {Promise}
 */
export const getAllCountries = () => {
  return Vue.http.get( 'https://corona.lmao.ninja/countries' );
};