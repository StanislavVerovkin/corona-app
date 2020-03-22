<template>
    <div class="container-fluid">
        <div class="row">
            <input
                    type="text"
                    class="form-control search m-3"
                    placeholder="Search..."
                    v-model="searchField"
                    v-on:keyup="filterCountries()">
        </div>

        <div class="row row-cols-1 row-cols-md-2">
            <div
                    class="col mb-4"
                    v-for="country of filteredCountries"
                    :key="country.country">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ country.country }}</h5>
                        <h6>Cases:<b>{{ country.cases }}</b>
                            <span
                                    class="badge"
                                    :class="{
                                    'badge-success': country.todayCases === 0,
                                    'badge-danger': country.todayCases > 0
                                    }">
                                today
                                <number
                                        :from="0"
                                        :to="country.todayCases === 0 ? '0' : `${country.todayCases}`"
                                        :duration="1"
                                        :delay="1"
                                        easing="Power1.easeOut"/>
                            </span>
                        </h6>
                        <h6>Recovered:<b>{{ country.recovered }}</b></h6>
                        <h6>Deaths:<b>{{ country.deaths }}</b>
                            <span
                                    class="badge"
                                    :class="{
                                    'badge-success': country.todayDeaths === 0,
                                    'badge-danger': country.todayDeaths > 0}">
                                today
                                <number
                                        :from="0"
                                        :to="country.todayDeaths === 0 ? '0' : `${country.todayDeaths}`"
                                        :duration="1"
                                        :delay="1"
                                        easing="Power1.easeOut"/>
                            </span>
                        </h6>
                        <h6>Currently sick:<b>{{ country.active }}</b></h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        searchField: '',
        filteredCountries: []
      }
    },
    created () {
      this.$http.get( 'https://corona.lmao.ninja/countries' )
        .then( res => {
          this.$store.dispatch( 'getAllCountriesAction', res.body );
          this.filterCountries();
        } );
    },
    computed: {
      allCountries () {
        return this.$store.getters.allCountries;
      }
    },
    methods: {
      filterCountries () {
        const value = this.searchField.toLowerCase();

        this.filteredCountries = this.searchField
          ? this.allCountries.filter( item => {
              return item.country.toLowerCase().includes( value );
            }
          )
          :
          this.allCountries;
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/list";
</style>
