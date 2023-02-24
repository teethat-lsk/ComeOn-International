<template>
  <div v-if="isActive" class="w-screen h-screen bg-black opacity-70">
    <slot />
  </div>
</template>

<script setup>
    const props = defineProps({
        isActive: {type:Boolean,default:false}
    })
</script>

<style lang="scss" scoped></style>
