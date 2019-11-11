<template>
  <AppLayout>
    <h1>About Us</h1>
    <div class="slideshow">
      <Slideshow/>
    </div>
    <p>
      We are a full service Grooming Salon found in East Brunswick in 1994 by Carol, an avid pet lover and graduate of
      Nash Academy. Carol has been grooming for 30 years and as a young girl graduated her first school from Poodle Grooming
      School of America in North Jersey. She is very experienced and has worked in many shops during her career.
    </p>
    <p>
      Inna has been grooming for 10 years and is also graduate of the Nash Academy. A very talented and caring groomer her
      speciality is all dogs and cats.
    </p>
    <p>
      Our ongoing mission is to manifest our love of pets into a clean and professionally run Pet Salon.
    </p>
    <p>
      We achieve this by hiring only experienced people who deeply care for Pets. Knowing and implementing the technical
      aspects of our trade, and respecting and appreciating our customers.
    </p>
    <p>
      We are located at 737 Rt. 18 South Side (between Racetrack and Brunswick Square Mall), East Brunswick, NJ
    </p>
    <p>
      Feel free to stop by and check us out and make an appointment.
    </p>
  </AppLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import AppLayout from '../components/layout/AppLayout.vue';
import Slideshow from '../components/Slideshow.vue';

const components = {
  AppLayout,
  Slideshow
};

@Component({
  components
})
export default class AboutUsPage extends Vue {
}
</script>
