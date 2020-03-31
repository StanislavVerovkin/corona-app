export default {
  state: {
    allCountries: [],
    filteredCountries: [],
    ukraineCountry: {},
    isChangeCases: true,
    history: []
  },
  mutations: {
    setCountries ( state, payload ) {

      state.allCountries = payload.filter( item => {
        return item.country !== 'Ukraine';
      } );

      state.allCountries = payload.sort( ( a, b ) => {
        return b.cases - a.cases;
      } );

    },

    setHistoryCountries ( state, payload ) {

      state.history = [];

      for ( let i = 0; i < state.allCountries.length; i++ ) {
        state.history.push( {
            ...state.allCountries[ i ],
            ...( payload.find( ( itmInner ) => itmInner.country === state.allCountries[ i ].country ) )
          }
        );
      }

      state.history = state.history.map( item => {
        return {
          country: item.country,
          cases: item.cases,
          deaths: item.deaths,
          active: item.active,
          recovered: item.recovered,
          todayCases: item.todayCases,
          todayDeaths: item.todayDeaths,
          timeline: {
            cases: Object.values( item.timeline ? item.timeline.cases : {} ),
            deaths: Object.values( item.timeline ? item.timeline.deaths : {} ),
            recovered: Object.values( item.timeline ? item.timeline.recovered : {} ),
          }
        }
      } );

      state.filteredCountries = state.history;

      state.ukraineCountry = state.history.find( item => {
        return item.country === 'Ukraine';
      } );
    },

    sortCountriesByCases ( state, payload ) {
      sortByParameter( state, payload, 'cases', 'isChangeCases' );
    },

    setFilteredCountries ( state, payload ) {
      state.filteredCountries = payload
        ? state.history.filter( item => {
            return item.country.toLowerCase().includes( payload ) && item.country !== 'Ukraine';
          }
        )
        :
        state.history;
    },

  },
  actions: {
    getAllCountriesAction ( { commit }, payload ) {
      commit( 'setCountries', payload );
    },
    getHistoryAction ( { commit }, payload ) {
      commit( 'setHistoryCountries', payload );
    },
    filterCountriesAction ( { commit }, payload ) {
      commit( 'setFilteredCountries', payload );
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
    ukraineCountry ( state ) {
      return state.ukraineCountry;
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