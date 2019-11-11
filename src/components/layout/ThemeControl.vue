<!--suppress HtmlUnknownTag -->
<template>
  <div class="theme-control">
    <a href="#">
      <span @click="onClick">
        <v-icon v-if="theme === 'dark'" name="spider" title="Dark Mode" color="#f5f957"/>
      </span>

        <span @click="onClick">
        <v-icon v-if="theme === 'light'" name="dog" title="Light Mode" color="#19B0DD"/>
      </span>

        <span @click="onClick">
        <v-icon v-if="theme === 'sepia'" name="cat" title="Sepia Mode" color="#814374"/>
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
