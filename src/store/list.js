export default {
  state: {
    allCountries: [],
    filteredCountries: [],
    isChangeCases: true,
    historyCountries: [],
  },
  mutations: {
    setCountries ( state, payload ) {

      state.allCountries = payload;

      state.allCountries = payload.sort( ( a, b ) => {
        return b.cases - a.cases;
      } );

    },

    setHistoryCountries ( state, payload ) {

      state.historyCountries = [];

      for ( let i = 0; i < state.allCountries.length; i++ ) {
        state.historyCountries.push( {
            ...state.allCountries[ i ],
            ...( payload.find( ( itmInner ) => itmInner.country === state.allCountries[ i ].country ) )
          }
        );
      }

      state.historyCountries = state.historyCountries.map( item => {

        const labels = [];
        // const cases = [];
        const deaths = [];
        const recovered = [];

        serializeLabels( labels, item );
        serializeData( recovered, item, 'recovered', 0 );
        serializeData( deaths, item, 'deaths', 1 );
        // serializeData( recovered, item, 'recovered', 2 );

        return {
          country: item.country,
          cases: item.cases,
          deaths: item.deaths,
          active: item.active,
          recovered: item.recovered,
          todayCases: item.todayCases,
          todayDeaths: item.todayDeaths,
          charts: {
            dataCollection: {
              labels,
              datasets: [
                {
                  label: 'Recovered',
                  borderColor: 'rgba(50, 115, 220, 0.5)',
                  backgroundColor: 'rgba(50, 115, 220, 0.1)',
                  data: recovered
                },
                {
                  label: 'Deaths',
                  borderColor: 'rgba(255, 56, 96, 0.5)',
                  backgroundColor: 'rgba(255, 56, 96, 0.1)',
                  data: deaths
                },
                // {
                //   label: 'Recovered',
                //   borderColor: 'rgba(75, 192, 192, 1)',
                //   backgroundColor: 'rgba(75, 192, 192, 0.2)',
                //   data: recovered
                // }
              ]
            },
          }
        }
      } );

      state.filteredCountries = state.historyCountries;

    },

    sortCountriesByCases ( state, payload ) {
      sortByParameter( state, payload, 'cases', 'isChangeCases' );
    },

    setFilteredCountries ( state, payload ) {
      state.filteredCountries = payload
        ? state.historyCountries.filter( item => {
            return item.country.toLowerCase().includes( payload );
          }
        )
        :
        state.historyCountries;
    },

  },
  actions: {
    allCountriesAction ( { commit }, payload ) {
      commit( 'setCountries', payload );
    },
    historyCountriesAction ( { commit }, payload ) {
      commit( 'setHistoryCountries', payload );
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

export const serializeData = ( state, payload, dataType ) => {

  const obj = Object.values( payload.timeline ? payload.timeline[ dataType ] : {} );

  obj.forEach( ( item, idx ) => {
      if ( idx >= obj.length - 1 - 7 && idx <= obj.length - 1 ) {
        state.push( item );
      }
    }
  )
};

export const serializeLabels = ( state, payload ) => {

  const obj = Object.keys( payload.timeline ? payload.timeline.cases : {} );

  obj.forEach( ( item, idx ) => {
      if ( idx >= obj.length - 1 - 7 && idx <= obj.length - 1 ) {
        state.push( item );
      }
    }
  );
};