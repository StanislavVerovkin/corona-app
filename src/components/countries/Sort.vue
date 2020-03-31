<template>
    <div>
        <div>
            <img
                    v-if="!isChangeCases"
                    class="arrow-img"
                    @click="sort()"
                    :src="require('../../assets/images/arrow-down.svg')"
            />
            <img
                    v-if="isChangeCases"
                    class="arrow-img"
                    @click="sort()"
                    :src="require('../../assets/images/arrow-up.svg')"
            />
        </div>
    </div>
</template>

<script>
  export default {
    computed: {
      isChangeCases () {
        return this.$store.getters.isChangeCases;
      },
      filteredCountries () {
        return this.$store.getters.filteredCountries;
      }
    },
    methods: {
      sort () {
        this.$store.dispatch( 'sortCountriesByCases', this.filteredCountries );
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/sort";
</style>