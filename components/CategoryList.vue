<template>
    <span class="block mb-16 text-[40px]">OUR PRODUCT</span>
    <div class=" flex flex-wrap gap-4">
        <CategoryCard v-for="cat in CategoryData" :category="cat" />
    </div>
</template>

<script setup>
import CategoryCard from './CategoryCard.vue';
import CategoryData from '~/assets/data/category.json'
</script>

<style lang="scss" scoped>

</style>