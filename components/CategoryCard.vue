<template>
  <div
    class="bg-secondary w-[320px] h-[320px] rounded-lg shadow-md shadow-black/60"
  >
    <img v-if="icon != ''" :src="getUrl(props.category.icon)" alt="icon" />
    
  </div>
</template>

<script setup lang="ts">
import { filename } from 'pathe/utils';
import { useAsset } from '../utils/imageLoader';

interface Props {
  category: ICategory;
}
const props = defineProps<Props>();

const icon = ref();
// icon.value = useAsset(props.category.icon);

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
