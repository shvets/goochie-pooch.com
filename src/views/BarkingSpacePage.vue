<template>
  <AppLayout>
    <h1>Barking Space</h1>
  </AppLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import AppLayout from '../components/layout/AppLayout.vue';

const components = {
  AppLayout
};

@Component({
  components
})
export default class BarkingSpacePage extends Vue {
}
</script>
