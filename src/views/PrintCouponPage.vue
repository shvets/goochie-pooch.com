<template>
  <PrintLayout>
    <Coupon/>
  </PrintLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import PrintLayout from '@/components/layout/PrintLayout.vue';
import Coupon from '@/components/Coupon.vue';

const components = {
  PrintLayout,
  Coupon
};

@Component({
  components
})
export default class PrintCouponPage extends Vue {}
</script>
