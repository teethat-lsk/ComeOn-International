<template>
  <div
    class="bg-primary-red"
    :class="{ 'bg-primary-red': !index, 'bg-secondary': index }"
  >
    <h1
      class="text-[64px]"
      :class="{ 'text-white': !index, 'text-black': index }"
    >
      {{ name }} {{ index }}
    </h1>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  index: Number,
});
</script>

<style lang="scss" scoped></style>
