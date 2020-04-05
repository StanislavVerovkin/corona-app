export default {
  state: {
    allCountries: [],
    filteredCountries: [],
    isChangeCases: true,
  },
  mutations: {
    setCountries ( state, payload ) {

      state.allCountries = payload;

      state.allCountries = payload.sort( ( a, b ) => {
        return b.cases - a.cases;
      } );

      state.filteredCountries = state.allCountries;

    },

    sortCountriesByCases ( state, payload ) {
      sortByParameter( state, payload, 'cases', 'isChangeCases' );
    },

    setFilteredCountries ( state, payload ) {
      state.filteredCountries = payload
        ? state.allCountries.filter( item => {
            return item.country.toLowerCase().includes( payload );
          }
        )
        :
        state.allCountries;
    },

  },
  actions: {
    allCountriesAction ( { commit }, payload ) {
      commit( 'setCountries', payload );
    },
    filterCountriesAction ( { commit }, payload ) {
      commit( 'setFilteredCountries', payload );
    },
    sortCountriesByCasesAction ( { commit }, payload ) {
      commit( 'sortCountriesByCases', payload );
    },
  },
  getters: {
    filteredCountries ( state ) {
      return state.filteredCountries;
    },
    isChangeCases ( state ) {
      return state.isChangeCases;
    }
  }
}

export const sortByParameter = ( state, payload, sortType, stateType ) => {

  state[ stateType ] = !state[ stateType ];

  payload.sort( ( a, b ) => {
      return state[ stateType ] ? b[ sortType ] - a[ sortType ] : a[ sortType ] - b[ sortType ];
    }
  );
};