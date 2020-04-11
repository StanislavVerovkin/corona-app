<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">

            <div class="d-flex align-items-center">
                <b-navbar-brand href="#">
                    <b>COVID-19</b>
                </b-navbar-brand>
                <app-sort></app-sort>
                <app-refresh></app-refresh>
                <router-link :to="`/map`">
                    <img
                            class="globe"
                            :src="require('../../assets/images/globe.svg')"
                    />
                </router-link>
            </div>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <!--<b-nav-item href="#">Home</b-nav-item>-->
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-form-input
                            size="sm"
                            class="search-input"
                            placeholder="Search..."
                            @keyup="filterCountries($event)"
                    >
                    </b-form-input>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
  import Sort from './Sort';
  import Refresh from './Refresh';

  export default {
    methods: {
      filterCountries ( event ) {
        const value = event.target.value.toLowerCase();
        this.$store.dispatch( 'filterCountriesAction', value );
      }
    },
    components: {
      'appSort': Sort,
      'appRefresh': Refresh,
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/navbar";
</style>