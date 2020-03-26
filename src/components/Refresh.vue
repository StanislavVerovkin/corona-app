<template>
    <img
            @click="updateData"
            class="refresh-img ml-2"
            :src="require('../assets/images/refresh.svg')"
    />
</template>

<script>
  import { getAllCountries } from './hoc/api';

  export default {
    methods: {
      updateData () {
        getAllCountries().then( res => {
          this.$store.dispatch( 'getAllCountriesAction', res.body );
        } )
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/refresh";
</style>