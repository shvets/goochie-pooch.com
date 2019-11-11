<template>
  <Layout class="app-layout">
    <template #header>
      <Header/>
    </template>

    <Split direction="horizontal" :gutter-size="0">
      <SplitArea :size="20">
        <Menu/>
      </SplitArea>

      <SplitArea :size="55">
        <slot />
      </SplitArea>

      <SplitArea :size="25">
        <Sidebar/>
      </SplitArea>
    </Split>

    <template #footer>
      <Footer/>
    </template>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import '../../plugins/element-ui';
import '../../plugins/vue-awesome.ts';
import '../../plugins/split.ts';
import '../../plugins/leaflet-js.ts';

import '../../assets/styles/index.scss';

import Layout from './Layout.vue';
import Header from './Header.vue';
import Menu from './Menu.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';

const components = {
  Layout,
  Header,
  Menu,
  Sidebar,
  Footer
};

@Component({ components })
export default class AppLayout extends Vue {
}
</script>
