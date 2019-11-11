<template>
  <div id="app"><router-view /></div>
<!--  <div id="app">-->
<!--    <div id="nav">-->
<!--      <router-link to="/fonts-demo">SVG</router-link> |-->
<!--      <router-link to="/element-ui-demo">Element UI</router-link> |-->
<!--      <router-link to="/markdown-demo">Markdown</router-link>-->
<!--    </div>-->
<!--    <router-view />-->
<!--  </div>-->
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class App extends Vue {}
</script>
