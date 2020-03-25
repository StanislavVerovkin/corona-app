<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    created () {
      this.$http.get( 'https://corona.lmao.ninja/countries' )
        .then( res => {
          this.$store.dispatch( 'getAllCountriesAction', res.body );
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
    }
</style>
