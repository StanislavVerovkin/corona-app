export default {
  state: {
    chart: {
      dataCollection: {
        labels: [],
        datasets: [
          {
            label: 'Cases',
            borderColor: 'rgba(50, 115, 220, 0.5)',
            backgroundColor: 'rgba(235, 244, 245, 1)',
            data: []
          },
          {
            label: 'Recovered',
            borderColor: 'rgba(50, 115, 220, 0.5)',
            backgroundColor: 'rgba(30, 107, 53, 1)',
            data: []
          },
          {
            label: 'Deaths',
            borderColor: 'rgba(255, 56, 96, 0.5)',
            backgroundColor: 'rgba(209, 0, 73, 1)',
            data: []
          },
        ]
      },
    }
  },
  mutations: {
    setHistoryByCountry ( state, payload ) {
      serializeLabels( state, payload );
      serializeData( state, payload, 0, 'cases' );
      serializeData( state, payload, 1, 'recovered' );
      serializeData( state, payload, 2, 'deaths' );
    }
  },
  actions: {
    historyByCountryAction ( { commit }, payload ) {
      commit( 'setHistoryByCountry', payload );
    }
  },
  getters: {
    chartData ( state ) {
      return state.chart.dataCollection;
    }
  },
}

export const serializeData = ( state, payload, index, dataType ) => {

  state.chart.dataCollection.datasets[ index ].data = [];

  const obj = Object.values( payload.timeline[ dataType ] );

  obj.forEach( ( item, idx ) => {
      if ( idx >= obj.length - 1 - 7 && idx <= obj.length - 1 ) {
        state.chart.dataCollection.datasets[ index ].data.push( item );
      }
    }
  )
};

export const serializeLabels = ( state, payload ) => {

  state.chart.dataCollection.labels = [];

  const obj = Object.keys( payload.timeline.cases );

  obj.forEach( ( item, idx ) => {
      if ( idx >= obj.length - 1 - 7 && idx <= obj.length - 1 ) {
        state.chart.dataCollection.labels.push( item );
      }
    }
  );
};