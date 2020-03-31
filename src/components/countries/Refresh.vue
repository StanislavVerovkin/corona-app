<template>
    <img
            @click="updateData"
            class="refresh-img ml-2"
            :src="require('../../assets/images/refresh.svg')"
    />
</template>

<script>
  import { getHistory } from '../../helpers/api';

  export default {
    methods: {
      updateData () {
        getHistory().then( res => {
          this.$store.dispatch( 'getHistoryAction', res.body );
        } )
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/refresh";
</style>