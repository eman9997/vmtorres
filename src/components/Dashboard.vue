<template>
  <div class="container-fluid">
    <Navbar />
    <img src="../../public/dash.jpg" alt="dash">

    <div id="app">
      <VCarousel :items="carouselItems" />
    </div>
  </div>
  <!-- <h1>{{ msg }}</h1> -->

  
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
import VCarousel from './VCarousel.vue'
import { ref } from 'vue';

const carouselItems = ref([
  'Slide 1',
  'Slide 2',
  'Slide 3',
  'Slide 4',
  'Slide 5',
]);
</script>

<style scoped lang="scss">
.container-fluid {
  width: 100%;
  height: 100vh;
  background: $primary;
}

.read-the-docs {
  color: #888;
}
</style>
