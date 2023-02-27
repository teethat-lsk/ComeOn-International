<template>
  <nav class="flex items-center bg-primary-red w-screen h-max gap-20 py-5 px-5 z-10 shadow-sm shadow-black/60">
    <div class="flex-1 justify-start items-center">
      <img @click="scrollTo('TOP')" src="~/assets/images/navbar-logo.png" alt="ComeOn-Logo" class=" w-[7rem]" />
    </div>
    <div class="flex-1 flex gap-4 justify-end items-center">
      <button @click="$emit('buttonClicked','CATALOG')" class="bg-secondary px-4 py-3 rounded-xl flex items-center gap-2 max-h-[60px] min-w-fit" >
        <span class="text-black text-2xl font-bold">Catalog</span>
        <img src="~/assets/images/catalog-logo.png" alt="Catalog logo" />
      </button>
      <div class="w-[1px] h-[80%] bg-secondary rounded-lg"></div>
      <button @click="$emit('buttonClicked','CONTACT')" class="bg-secondary px-4 py-3 rounded-xl flex items-center gap-2 max-h-[60px] min-w-fit">
        <span class="text-black text-2xl font-bold">Contact</span>
        <img src="~/assets/images/contact-logo.png" alt="Contact logo" />
      </button>
    </div>
  </nav>
</template>

<script setup>
const scrollTo = (position) => {

  document.documentElement.scrollTo({behavior:"smooth",top:0})
 
}
</script>
<style lang="scss" scoped></style>
