<template>
    <div>
        <div>
            <span class="sort-title">Sort Cases</span>
            <img
                    v-if="!isChangeCases"
                    class="arrow-img ml-2"
                    @click="sort($event)"
                    :src="require('../assets/images/arrow-down.svg')"
            />
            <img
                    v-if="isChangeCases"
                    class="arrow-img ml-2"
                    @click="sort($event)"
                    :src="require('../assets/images/arrow-up.svg')"
            />
        </div>
        <!--<div>-->
            <!--<span class="sort-title">Sort Recovered</span>-->
            <!--<img-->
                    <!--v-if="!isChangeRecovered"-->
                    <!--class="arrow-img ml-2"-->
                    <!--@click="sort($event)"-->
                    <!--:src="require('../assets/images/arrow-down.svg')"-->
            <!--/>-->
            <!--<img-->
                    <!--v-if="isChangeRecovered"-->
                    <!--class="arrow-img ml-2"-->
                    <!--@click="sort($event)"-->
                    <!--:src="require('../assets/images/arrow-up.svg')"-->
            <!--/>-->
        <!--</div>-->
    </div>
</template>

<script>
  export default {
    computed: {
      isChangeCases () {
        return this.$store.getters.isChangeCases;
      },
      // isChangeRecovered () {
      //   return this.$store.getters.isChangeRecovered;
      // },
      filteredCountries () {
        return this.$store.getters.filteredCountries;
      }
    },
    methods: {
      sort ( event ) {

        const sortType = event.target.parentElement.innerText;

        switch ( sortType ) {
          case 'Sort Cases':
            this.$store.dispatch( 'sortCountriesByCases', this.filteredCountries );
            break;
          // case 'Sort Recovered':
          //   this.$store.dispatch( 'sortCountriesByRecovered', this.filteredCountries );
          //   break;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_sort.scss";
</style>