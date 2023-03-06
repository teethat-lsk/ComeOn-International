<template>
  <div
  @click="scrollTo(category.name.toLocaleLowerCase())"
    class="bg-white w-[300px] h-[300px] rounded-lg shadow-md shadow-black/60"
  >
    <img :src="getUrl(props.category.icon)" alt="icon" class="mt-4 ml-4" />
    <span class="block mt-4 ml-4 text-left text-[25px]">{{ category.name }}</span>
    <ul class=" list-disc text-left pl-16">
      <li class="text-[20px]" v-for="text in props.category.examples">{{ text }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  category: ICategory;
}
const props = defineProps<Props>();

const icon = ref();
// icon.value = useAsset(props.category.icon);
const scrollTo = (position: string) => {
  const target = document.getElementById(position)
  target?.scrollIntoView({behavior:'smooth'})
};
const getUrl = (path: string) => {
  return new URL(
    `/assets/images/category/${path}`,
    import.meta.url
  ).href.toString();
};
// const useAsset = (path:string) => {
//     const assets =  import.meta.glob('../assets/images/category/*', {
//         eager: true,
//         import: 'default'
//     })
//     return assets['/assets/images/category/'+path]
// }
</script>

<style lang="scss" scoped></style>
