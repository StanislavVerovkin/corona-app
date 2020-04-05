<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
  import { getAllCountries } from './helpers/api';

  export default {
    created () {
      getAllCountries()
        .then( res => {
          this.$store.dispatch( 'allCountriesAction', res.body );
        } )
    },
  }
</script>

<style>
    html,
    body {
        height: 100%;
        background-color: #121212 !important;
    }

    #app {
        font-family: 'Inconsolata', monospace;
        background-color: #121212;
        height: 100%;
    }
</style>
