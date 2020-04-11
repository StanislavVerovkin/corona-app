<template>
    <img
            @click="updateData"
            class="refresh-img ml-2 mr-2"
            :src="require('../../assets/images/refresh.svg')"
    />
</template>

<script>
  import { getAllCountries } from '../../helpers/api';

  export default {
    methods: {
      updateData () {
        getAllCountries().then( res => {
          this.$store.dispatch( 'allCountriesAction', res.body );
        } )
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/refresh";
</style>