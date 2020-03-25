export default {
  state: {
    allCountries: [],
    filteredCountries: [],
    isChangeCases: true,
  },
  mutations: {
    setCountries ( state, payload ) {
      state.isChangeCases = true;
      state.allCountries = payload;
      state.filteredCountries = payload;
    },

    sortCountriesByCases ( state, payload ) {
      sortByParameter( state, payload, 'cases', 'isChangeCases' );
    },

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
  },
  getters: {
    filteredCountries ( state ) {
      return state.filteredCountries;
    },
    isChangeCases ( state ) {
      return state.isChangeCases;
    },
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