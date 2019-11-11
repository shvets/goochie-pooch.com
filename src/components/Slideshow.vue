<!--suppress HtmlUnknownTag -->
<template>
  <div>
    <el-carousel type="card" height="350px" :autoplay="false" arrow="always">
      <el-carousel-item v-for="image in images" :key="image">
        <img :src="require(`@/assets/images/slideshow/${image}`)" width="100%" height="auto"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class AboutUsPage extends Vue {
  protected images = [
    'DSC03215.png', 'DSC03226.png', 'DSC03264.png', 'DSC03278.png', 'DSC03295.png',
    'DSC03315.png', 'DSC03338.png', 'DSC03396.png', 'DSC03218.png', 'DSC03262.png',
    'DSC03265.png', 'DSC03282.png', 'DSC03310.png', 'DSC03317.png', 'DSC03344.png'
  ];
}
</script>

<style lang="scss" scoped>
.el-carousel-item {
  /*width: 500px;*/
  /*height: auto;*/

  width:200px;
  height:40px;
}
</style>

