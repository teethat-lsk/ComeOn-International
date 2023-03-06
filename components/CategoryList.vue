<template>
  <span class="block mb-16 text-[40px]">OUR PRODUCTS</span>
  <div class="px-[10px]">
    <Carousel :items-to-show="5" snap-align="end">
      <Slide v-for="cat in CategoryData" :key="cat.name" class="py-4">
        <CategoryCard class=" cursor-pointer" :category="cat" />
      </Slide>
      <template #addons>
        <!-- <Navigation /> -->
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import CategoryCard from './CategoryCard.vue';
import CategoryData from '~/assets/data/category.json';
</script>

<style lang="scss" scoped></style>
