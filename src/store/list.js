export default {
  state: {
    allCountries: [],
  },
  mutations: {
    setValues ( state, payload ) {
      state.allCountries = payload;
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