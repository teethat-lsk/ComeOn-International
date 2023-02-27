<template>
    <div>
        <ProductCard v-for="(item,index) in CatalogData " :name="item.name" :index="index%2" />
    </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
</script>

<style lang="scss" scoped>

</style>