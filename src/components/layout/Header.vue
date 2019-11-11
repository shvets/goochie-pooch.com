<template>
  <div class="nav">
    <div class="title">
      Goochie Pooch & Cats Too
    </div>

    <div class="facebook">
      <span>Visit us on facebook:</span>

      <a href="https://www.facebook.com/goochie.pooch">
        <img class="facebook-logo" src="../../assets/images/facebook.png">
      </a>
    </div>

    <ThemeControl ref="themeControl" :theme="currentTheme" @change="onThemeChange"/>
  </div>
</template>

<script lang="ts">
import Component, {mixins} from 'vue-class-component';

import {ThemeMixin} from '@/mixins/theme-mixin';

import ThemeControl from './ThemeControl.vue';

const components = {
  ThemeControl
};

@Component({ components })
export default class AppLayout extends mixins(ThemeMixin) {}
</script>

<style lang="scss" scoped>
.facebook {
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.facebook-logo {
  width: 2rem;
  height: auto;
}
</style>
