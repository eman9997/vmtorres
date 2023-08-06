<template>
<div class="carousel-example">
    <carousel :perPage="1" :autoplay="false" :pagination-visible="false">
        <slide v-for="(item, index) in items" :key="index">
        <div class="slide-content">
            {{ item }}
        </div>
        </slide>
    </carousel>
</div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  items: Array,
});
</script>

<style scoped>
.carousel-example {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.slide-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
}
</style>
