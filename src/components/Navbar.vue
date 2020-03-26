<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">

            <div class="d-flex align-items-center">
                <b-navbar-brand href="#">
                    <b>COVID-19</b>
                </b-navbar-brand>
                <app-sort></app-sort>
                <app-refresh></app-refresh>
            </div>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <!--<b-nav-item href="#">Home</b-nav-item>-->
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item>
                        <b-form-input
                                size="sm"
                                class="search-input"
                                placeholder="Search..."
                                v-model="searchField"
                                @keyup="filterCountries"
                        >
                        </b-form-input>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
  import Sort from '../components/Sort';
  import Refresh from '../components/Refresh';

  export default {
    data () {
      return {
        searchField: '',
      }
    },
    methods: {
      filterCountries () {
        const value = this.searchField.toLowerCase();
        this.$store.dispatch( 'filteringCountries', value );
      }
    },
    components: {
      'appSort': Sort,
      'appRefresh': Refresh,
    }
  }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/navbar";
</style>