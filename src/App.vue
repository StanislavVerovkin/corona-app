<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
  import { getAllCountries, getHistory } from './helpers/api';

  export default {
    created () {
      getAllCountries()
        .then( res => {
          this.$store.dispatch( 'allCountriesAction', res.body );
        } )
        .then( () => {
          getHistory().then( res => {
            this.$store.dispatch( 'historyCountriesAction', res.body );
          } )
        } );
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
