<template>
  <AppLayout>
    <h1>Links</h1>
    <ul>
      <li>
        <a href="http://aspca.org" target="_blank">ASPCA</a>
      </li>
      <li>
        <a href="http://petfinder.com" target="_blank">Pet Finders</a>
      </li>
    </ul>
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
export default class LinksPage extends Vue {
}
</script>
