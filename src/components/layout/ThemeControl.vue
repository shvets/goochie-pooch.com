<!--suppress HtmlUnknownTag -->
<template>
  <div class="theme-control">
    <a href="#">
      <span @click="onClick">
        <v-icon v-if="theme === 'dark'" name="moon" title="Dark Mode" width="15" height="15" color="silver"/>
      </span>

        <span @click="onClick">
        <v-icon v-if="theme === 'light'" name="sun" title="Light Mode" width="15" height="15" color="orange"/>
      </span>

        <span @click="onClick">
        <v-icon v-if="theme === 'sepia'" name="mug-hot" title="Sepia Mode" width="15" height="15" color="#9A7D0A"/>
      </span>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import {Theme} from './theme';
import {Prop} from 'vue-property-decorator';

@Component
export default
class ThemeControl extends Vue {
  @Prop({ default: Theme.Dark })
  protected theme!: Theme;

  protected themes = [Theme.Dark, Theme.Light, Theme.Sepia];

  get nextTheme() {
    const currentIndex = this.themes.indexOf(this.theme);
    const nextIndex = (currentIndex + 1) % this.themes.length;

    return this.themes[nextIndex]
  }

  protected onClick() {
    this.$emit('change', this.nextTheme);
  }
}
</script>

<style lang="scss" scoped>
.theme-control {
  width: 3rem;
}
</style>
