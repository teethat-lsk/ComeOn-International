<template>
  <div
    :id="product.title.toLocaleLowerCase()"
    class="bg-primary-red px-12 py-8 scroll-mt-[100px]"
    :class="{
      'bg-primary-red text-white': index == 0,
      'bg-secondary text-black': index == 1,
    }"
  >
    <div v-if="index == 0" class="flex justify-center gap-[10%]">
      <div>
        <h1 class="text-[64px]">
          {{ product.title }}
        </h1>
        <ul class="list-disc pl-12 text-[36px]">
          <li v-for="detail in product.details">
            {{ detail }}
          </li>
        </ul>
      </div>
      <img :src="getUrl(product.image)" alt="product-image" />
    </div>
    <div v-if="index == 1" class="flex justify-center gap-[10%]">
      <img :src="getUrl(product.image)" alt="product-image" />
      <div>
        <h1 class="text-[64px]">
          {{ product.title }}
        </h1>
        <ul class="list-disc pl-12 text-[36px]">
          <li v-for="detail in product.details">
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  product: IProduct;
  index: number;
}
const props = defineProps<Props>();

const getUrl = (path: string) => {
  return new URL(
    `/assets/images/product/${path}`,
    import.meta.url
  ).href.toString();
};
</script>

<style lang="scss" scoped></style>
