<template>
  <nav class="flex items-center bg-primary-red w-screen h-max gap-20 py-5 px-5">
    <div class="flex-1 justify-start items-center">
      <img src="~/assets/images/comeOn-logo.png" alt="ComeOn-Logo" />
    </div>
    <div class="flex-1 flex gap-4 justify-end items-center">
      <button @click="$emit('onClick')" class="bg-secondary px-4 py-3 rounded-xl flex items-center gap-2 max-h-[60px] min-w-fit" >
        <span class="text-black text-2xl font-bold">Catalog</span>
        <img src="~/assets/images/catalog-logo.png" alt="Catalog logo" />
      </button>
      <div class="w-[1px] h-[80%] bg-secondary rounded-lg"></div>
      <button @click="$emit('onClick')" class="bg-secondary px-4 py-3 rounded-xl flex items-center gap-2 max-h-[60px] min-w-fit">
        <span class="text-black text-2xl font-bold">Contact</span>
        <img src="~/assets/images/contact-logo.png" alt="Contact logo" />
      </button>
    </div>
  </nav>
</template>

<script setup>
const emit = defineEmits({

})
</script>
<style lang="scss" scoped></style>
