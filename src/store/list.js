export default {
  state: {
    allCountries: [],
    worldMapCountries: [],
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

    setFilteredCountries ( state, payload ) {
      state.searchField = payload;
      state.filteredCountries = payload
        ? state.allCountries.filter( item => {
            return item.country.toLowerCase().includes( payload );
          }
        )
        :
        state.allCountries;
    },

    serializeDataForWorldMap ( state, payload ) {
      state.worldMapCountries = payload.reduce( ( acc, cur ) => {
        acc[ cur.countryInfo.iso2 ] = cur.cases;
        return acc;
      }, {} );
    },

    sortCountriesByCases ( state, payload ) {
      sortByParameter( state, payload, 'cases', 'isChangeCases' );
    },

  },
  actions: {
    allCountriesAction ( { commit }, payload ) {
      commit( 'setCountries', payload );
      commit( 'serializeDataForWorldMap', payload );
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
    worldMapCountries ( state ) {
      return state.worldMapCountries;
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
};