<template>
    <img
            @click="updateData"
            class="refresh-img ml-2"
            :src="require('../assets/images/refresh.svg')"
    />
</template>

<script>
  export default {
    methods: {
      updateData () {
        this.$http.get( 'https://corona.lmao.ninja/countries' )
          .then( res => {
            this.$store.dispatch( 'getAllCountriesAction', res.body );
          } );
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/refresh";
</style>