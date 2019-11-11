<template>
  <AppLayout>
    <div class="site-ui">
      <h1 class="title">Welcome to our home page!</h1>

      <el-tabs>
        <el-tab-pane label="Place">
          <a :href="googleLink">
            <img src="../assets/images/building.jpg" class="building"/>
          </a>
        </el-tab-pane>

        <el-tab-pane label="Address">
          <blockquote>
            <a class="address" :href="googleLink">
              Goochie Pooch & Cats Too
              <br/>
              737 State Route 18
              <br/>
              East Brunswick, NJ 08816
              <br/>
              U.S.A.
            </a>
          </blockquote>

          <p class="plain-text">
            We are located on Route 18 South in between Racetrack Rd. and Ryders line,
            500 sq. feet from East Brunswick Square Mall.
          </p>

          <p class="plain-text">
            Please feel free to call us any time at
          </p>

          <div class="telephone">
            <a href="tel:732-432-919" title="Call to Goochie Pooch">732-432-919</a>
          </div>

          <p class="plain-text">
            for Grooming Prices and scheduling an appointment.
          </p>
        </el-tab-pane>

        <el-tab-pane label="Map" lazy>
          <l-map class="map" :zoom="zoom" :center="center" >
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker :lat-lng="center" :icon="myMarkerIcon">
              <l-tooltip content="Goochie Pooch & Cats Too" />
            </l-marker>
          </l-map>
        </el-tab-pane>
      </el-tabs>
    </div>
  </AppLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import AppLayout from '../components/layout/AppLayout.vue';
import {Icon} from 'leaflet';
import {LMap, LTileLayer, LMarker, LGeoJson, LIcon, LTooltip } from 'vue2-leaflet';

const components = {
  AppLayout,
  LMap,
  LTileLayer,
  LMarker,
  LGeoJson,
  LIcon,
  LTooltip
};

@Component({
  components
})
export default class HomePage extends Vue {
  protected url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  protected zoom = 17;
  protected center = [40.42730140561036, -74.38263550400734];
  protected googleLink = 'https://maps.google.com/maps?q=Goochie+Pooch+%26+Cats+Too,+New+Jersey+18,+East+Brunswick,+NJ&hl=en&ll=40.428104,-74.383246&spn=0.003446,0.00522&sll=40.42748,-74.382527&sspn=0.006926,0.010439&oq=goochi&t=h&z=18';

  protected myMarkerIcon = new Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconSize: [32, 42],
  });
}
</script>

<style lang="scss" scoped>
.title {
  color: var(--secondary-color);
  font-size: 42px;
}

.building {
  width: 77%;
  height: auto;
}

.map {
  width: 50rem;
  height: 30rem;
}

.plain-text {
  font-family: Jost;
}

.telephone a {
  font-family: Reenie Beanie,arial;
  color: var(--tetriary-color);
  font-size: 80px;
}

/*.site-ui {*/
/*  margin: 1rem;*/
/*}*/
</style>
