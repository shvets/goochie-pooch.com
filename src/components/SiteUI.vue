<template>
  <div class="site-ui"><router-view/></div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

// import '../plugins';
//
// import './scss/styles.scss';

@Component
export default class SiteUI extends Vue {
}
</script>

<style lang="scss" scoped>
.site-ui {
  /*margin: 1rem;*/
}
</style>

