<template>
  <div class="menu">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about-us">About Us</router-link>
      </li>
<!--      <li>-->
<!--        <router-link to="/services">Services</router-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <router-link to="/grooming-tips">Grooming Tips</router-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <router-link to="/barking-space">Barking Space</router-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <router-link to="/pooring-corner">Pooring Corner</router-link>-->
<!--      </li>-->
      <li>
        <router-link to="/links">Links</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const components = {
};

@Component({components})
export default class Menu extends Vue {
}
</script>
