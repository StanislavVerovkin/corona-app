export default {
  state: {
    dataCollection: {
      labels: [],
      datasets: [
        {
          label: 'Cases',
          borderColor: 'rgba(50, 115, 220, 0.5)',
          backgroundColor: 'rgba(50, 115, 220, 0.1)',
          data: []
        },
        {
          label: 'Deaths',
          borderColor: 'rgba(255, 56, 96, 0.5)',
          backgroundColor: 'rgba(255, 56, 96, 0.1)',
          data: []
        }
      ]
    },
    options: {
      scales: {
        yAxes: [ {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            display: true
          }
        } ],
        xAxes: [ {
          gridLines: {
            display: false
          }
        } ]
      },
      legend: {
        display: true
      },
      responsive: false,
      maintainAspectRatio: false
    },
    dataTrend: []
  },
  mutations: {
    setData ( state, payload ) {
      serializeLabels( state, payload );
      serializeData( state, payload, 'cases', 0 );
      serializeData( state, payload, 'deaths', 1 );
    }
  },
  actions: {
    getHistoryByCountryAction ( { commit }, payload ) {
      commit( 'setData', payload );
    }
  },
  getters: {
    getData ( state ) {
      return state;
    }
  },
}

export const serializeData = ( state, payload, dataType ) => {
  state.dataCollection.datasets[ index ].data = [];

  const obj = Object.values( payload.timeline[ dataType ] );

  obj.forEach( ( item, idx ) => {
      if ( idx >= obj.length - 1 - 7 && idx <= obj.length - 1 ) {
        state.dataCollection.datasets[ index ].data.push( item );
      }
    }
  )
};

export const serializeLabels = ( state, payload ) => {
  state.dataCollection.labels = [];

  const obj = Object.keys( payload.timeline.cases );

  obj.forEach( ( item, idx ) => {
      if ( idx >= obj.length - 1 - 7 && idx <= obj.length - 1 ) {
        state.dataCollection.labels.push( item );
      }
    }
  );
};