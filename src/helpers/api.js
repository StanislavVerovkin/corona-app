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

/**
 * Get history data.
 *
 * @return {Promise}
 */
export const getHistory = () => {
  return Vue.http.get( `https://corona.lmao.ninja/v2/historical` );
};

/**
 * Get history data by country.
 *
 * @return {Promise}
 */
export const getHistoryByCountry = ( countryName ) => {
  return Vue.http.get( `https://corona.lmao.ninja/v2/historical/${countryName}` );
};