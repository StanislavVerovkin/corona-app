export default {
  state: {
    allCountries: [],
    singleCountry: {
      country: null,
      todayCases: null,
      todayDeaths: null,
    }
  },
  mutations: {
    setValues ( state, payload ) {
      state.allCountries = payload;
      state.singleCountry.country = payload.country;
      state.singleCountry.todayCases = payload.todayCases;
      state.singleCountry.todayDeaths = payload.todayDeaths;
    },
  },
  actions: {
    getAllCountriesAction ( { commit }, payload ) {
      commit( 'setValues', payload );
    }
  },
  getters: {
    allCountries ( state ) {
      return state.allCountries;
    }
  }
}