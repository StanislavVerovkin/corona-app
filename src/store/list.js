export default {
  state: {
    allCountries: [],
    filteredCountries: [],
    isChangeCases: true,
    isChangeRecovered: true,
  },
  mutations: {
    setCountries ( state, payload ) {
      state.allCountries = payload;
    },

    sortCountriesByCases ( state, payload ) {
      sortByParameter( state, payload, 'cases', 'isChangeCases' );
    },

    // sortCountriesByRecovered ( state, payload ) {
    //   sortByParameter( state, payload, 'recovered', 'isChangeRecovered' );
    // },

    filteringCountries ( state, payload ) {
      state.filteredCountries = payload
        ? state.allCountries.filter( item => {
            return item.country.toLowerCase().includes( payload );
          }
        )
        :
        state.allCountries;
    }
  },
  actions: {
    getAllCountriesAction ( { commit }, payload ) {
      commit( 'setCountries', payload );
    },
    filteringCountries ( { commit }, payload ) {
      commit( 'filteringCountries', payload );
    },
    sortCountriesByCases ( { commit }, payload ) {
      commit( 'sortCountriesByCases', payload );
    },
    // sortCountriesByRecovered ( { commit }, payload ) {
    //   commit( 'sortCountriesByRecovered', payload );
    // }
  },
  getters: {
    allCountries ( state ) {
      return state.allCountries;
    },
    filteredCountries ( state ) {
      return state.filteredCountries;
    },
    isChangeCases ( state ) {
      return state.isChangeCases;
    },
    // isChangeRecovered ( state ) {
    //   return state.isChangeRecovered;
    // }
  }
}

export const sortByParameter = ( state, payload, sortType, stateType ) => {

  state[ stateType ] = !state[ stateType ];

  payload.sort( ( a, b ) => {
      return state[ stateType ] ? b[ sortType ] - a[ sortType ] : a[ sortType ] - b[ sortType ];
    }
  );

  state.filteredCountries = payload;
};