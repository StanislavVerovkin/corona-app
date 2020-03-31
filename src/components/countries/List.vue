<template>
    <div class="container-fluid">
        <app-navbar></app-navbar>
        <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <h5 class="card-title">
                                <router-link
                                        :to="`/country/${ukraineCountry.country}`"
                                        class="text-decoration-none"
                                >
                                    {{ ukraineCountry.country }}
                                </router-link>
                            </h5>
                            <h6>Cases:<b>{{ ukraineCountry.cases }}</b>
                                <span
                                        class="badge"
                                        v-if="ukraineCountry.todayCases !== 0"
                                        :class="{
                                        'badge-success': ukraineCountry.todayCases === 0,
                                        'badge-danger': ukraineCountry.todayCases > 0}">
                                    today
                                    <number
                                            :from="0"
                                            :to="ukraineCountry.todayCases"
                                            :duration="1"
                                            :delay="1"
                                            easing="Power1.easeOut"/>
                                </span>
                            </h6>
                            <h6>Recovered:<b>{{ ukraineCountry.recovered }}</b></h6>
                            <h6>Deaths:<b>{{ ukraineCountry.deaths }}</b>
                                <span
                                        class="badge"
                                        v-if="ukraineCountry.todayDeaths !== 0"
                                        :class="{
                                        'badge-success': ukraineCountry.todayDeaths === 0,
                                        'badge-danger': ukraineCountry.todayDeaths > 0}">
                                    today
                                    <number
                                            :from="0"
                                            :to="ukraineCountry.todayDeaths"
                                            :duration="1"
                                            :delay="1"
                                            easing="Power1.easeOut"/>
                                </span>
                            </h6>
                            <h6>Currently sick:<b>{{ ukraineCountry.active }}</b></h6>
                            <hr>
                            <div>
                                <h6>Deaths trend:</h6>
                                <trend
                                        v-if="ukraineCountry.timeline"
                                        :data="ukraineCountry.timeline.deaths"
                                        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                                        auto-draw
                                        smooth
                                >
                                </trend>
                            </div>
                            <div>
                                <h6>Recovered trend:</h6>
                                <trend
                                        v-if="ukraineCountry.timeline"
                                        :data="ukraineCountry.timeline.recovered"
                                        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                                        auto-draw
                                        smooth
                                >
                                </trend>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                            <hr>
                            <div>
                                <h6>Deaths trend:</h6>
                                <trend
                                        v-if="country.timeline"
                                        :data="country.timeline.deaths"
                                        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                                        auto-draw
                                        smooth
                                >
                                </trend>
                            </div>
                            <div>
                                <h6>Recovered trend:</h6>
                                <trend
                                        v-if="country.timeline"
                                        :data="country.timeline.recovered"
                                        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                                        auto-draw
                                        smooth
                                >
                                </trend>
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

  export default {
    computed: {
      filteredCountries () {
        return this.$store.getters.filteredCountries;
      },
      ukraineCountry () {
        return this.$store.getters.ukraineCountry;
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
