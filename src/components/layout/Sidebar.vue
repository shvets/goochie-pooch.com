<template>
  <div class="sidebar">
    <p align="center">
      <router-link to="print-coupon">Print Coupon</router-link>
    </p>
    <Coupon/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Coupon from '@/components/Coupon.vue';

const components = {
  Coupon
};

@Component({components})
export default class Sidebar extends Vue {}
</script>
