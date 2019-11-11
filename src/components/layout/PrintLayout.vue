<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import '../../assets/styles/index.scss';

@Component
export default class PrintLayout extends Vue {}
</script>
