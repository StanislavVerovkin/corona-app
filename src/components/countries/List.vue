<template>
    <div class="container-fluid">
        <app-navbar></app-navbar>
        <div class="row row-cols-1 row-cols-md-2">
            <div
                    class="col mb-4"
                    v-for="country of filteredCountries"
                    :key="country.country">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <h5 class="card-title">
                                <router-link
                                        :to="`/country/${country.country}`"
                                        class="text-decoration-none"
                                >
                                    {{ country.country }}
                                </router-link>
                            </h5>
                            <h6>Cases:<b>{{ country.cases }}</b>
                                <span
                                        class="badge"
                                        v-if="country.todayCases !== 0"
                                        :class="{
                                        'badge-success': country.todayCases === 0,
                                        'badge-danger': country.todayCases > 0
                                        }">
                                    today
                                    <number
                                            :from="0"
                                            :to="country.todayCases"
                                            :duration="1"
                                            :delay="1"
                                            easing="Power1.easeOut"/>
                                </span>
                            </h6>
                            <h6>Recovered:<b>{{ country.recovered }}</b></h6>
                            <h6>Deaths:<b>{{ country.deaths }}</b>
                                <span
                                        class="badge"
                                        v-if="country.todayDeaths !== 0"
                                        :class="{
                                        'badge-success': country.todayDeaths === 0,
                                        'badge-danger': country.todayDeaths > 0}">
                                    today
                                    <number
                                            :from="0"
                                            :to="country.todayDeaths"
                                            :duration="1"
                                            :delay="1"
                                            easing="Power1.easeOut"/>
                                </span>
                            </h6>
                            <h6>Currently sick:<b>{{ country.active }}</b></h6>
                            <h6>Tests:<b>{{ country.tests }}</b></h6>
                            <hr/>
                            <div class="d-flex justify-content-center">
                                <router-link
                                        :to="`/country/${country.country}`"
                                        class="text-decoration-none show-btn"
                                >
                                    SHOW CHART
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Navbar from './Navbar';
  import { getAllCountries } from '../../helpers/api';

  export default {
    created () {
      if ( window.location.href === 'https://corona-app-97beb.firebaseapp.com/#/list' ) {
        window.location.href = 'https://coronaapp.online/#/list';
      }
      getAllCountries()
        .then( res => {
          this.$store.dispatch( 'allCountriesAction', res.body );
        } )
    },
    computed: {
      filteredCountries () {
        return this.$store.getters.filteredCountries;
      },
    },
    components: {
      'appNavbar': Navbar,
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/list";
</style>
