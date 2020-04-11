<template>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-xl-12">
                <div class="d-flex justify-content-center">
                    <router-link
                            :to="`/list`"
                            class="text-decoration-none show-btn"
                    >
                        GO BACK
                    </router-link>
                </div>
                <h3>{{name}}</h3>
                <app-bar-chart
                        :chartData="dataCollection"
                        :options="options">
                </app-bar-chart>
            </div>
        </div>
    </div>
</template>

<script>
  import { getHistoryByCountry } from '../../helpers/api';
  import BarChart from '../chart/Chart';

  export default {
    props: [ 'name' ],
    data () {
      return {
        options: {
          scales: {
            yAxes: [ {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
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
          responsive: true,
          maintainAspectRatio: false,
        },
        dataCollection: null
      }
    },
    mounted () {
      if ( window.location.href === `https://corona-app-97beb.firebaseapp.com/#/country/${this.name}` ) {
        window.location.href = `https://coronaapp.online/#/country/${this.name}`;
      }
      getHistoryByCountry( this.name ).then( res => {
        this.$store.dispatch( 'historyByCountryAction', res.body );
        this.fillData();
      } );
    },
    methods: {
      fillData () {
        this.dataCollection = this.$store.getters.chartData;
      }
    },
    components: {
      'appBarChart': BarChart
    }
  }
</script>

<style lang="scss" scoped>
    .show-btn {
        border: 1px solid;
        padding: 10px 20px 10px 20px;
        margin-bottom: 50px;
    }

    h3 {
        text-align: center;
    }
</style>