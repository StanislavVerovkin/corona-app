<template>
    <div class="vue-world-map">
        <Map/>
    </div>
</template>

<script>
  import chroma from 'chroma-js';
  import Map from './Map';
  import { getAllCountries } from '../../helpers/api';
  import {
    getDynamicMapCss,
    getBaseCss,
    getCombinedCssString,
  } from './DynamicMapCss';

  export default {
    components: { Map },
    watch: {
      countryData () {
        this.renderMapCSS();
      },
    },
    props: {
      lowColor: {
        type: String,
        default: '#d1d8d8',
      },
      highColor: {
        type: String,
        default: '#d80607',
      },
      countryData: {
        type: Object,
      },
      defaultCountryFillColor: {
        type: String,
        default: '#dadada',
      },
      countryStrokeColor: {
        type: String,
        default: 'black',
      },
    },
    data () {
      return {
        node: document.createElement( 'style' ),
        chromaScale: chroma.scale( [ this.$props.lowColor, this.$props.highColor ] ),
      };
    },
    methods: {
      renderMapCSS () {
        const baseCss = getBaseCss( this.$props );
        const dynamicMapCss = getDynamicMapCss( this.$store.getters.worldMapCountries, this.chromaScale );
        this.$data.node.innerHTML = getCombinedCssString( baseCss, dynamicMapCss );
      },
    },
    mounted () {
      getAllCountries()
        .then( res => {
          this.$store.dispatch( 'allCountriesAction', res.body );
          document.body.appendChild( this.$data.node );
          this.renderMapCSS();
        } );
    },
  };
</script>

<style>
    .vue-world-map {
        height: 100%;
    }

    #map-svg {
        height: 100%;
    }
</style>
