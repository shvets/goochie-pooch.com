<template>
  <AppLayout>
    <h1>Pooring Corner</h1>
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
export default class PooringCornerPage extends Vue {
}
</script>
