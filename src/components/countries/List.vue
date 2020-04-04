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
                            <hr/>
                            <div class="small">
                                <app-line-chart :chart-data="country.charts.dataCollection"></app-line-chart>
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
  import LineChart from '../chart/Chart';

  export default {
    data () {
      return {
        datacollection: {
          labels: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
          datasets: [
            {
              label: 'Cases',
              borderColor: 'rgba(50, 115, 220, 0.5)',
              backgroundColor: 'rgba(50, 115, 220, 0.1)',
              data: [ 23, 45, 645, 4, 666, 33, 44, 33, 2, 3 ]
            },
            {
              label: 'Deaths',
              borderColor: 'rgba(255, 56, 96, 0.5)',
              backgroundColor: 'rgba(255, 56, 96, 0.1)',
              data: [ 21, 33, 445, 433, 32, 11, 33, 44, 5, 6 ]
            }
          ]
        },

      }
    },
    computed: {
      filteredCountries () {
        return this.$store.getters.filteredCountries;
      },
    },
    components: {
      'appNavbar': Navbar,
      'appLineChart': LineChart
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/list";
</style>
