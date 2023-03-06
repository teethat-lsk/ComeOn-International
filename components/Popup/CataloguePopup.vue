<template>
  <BackDrop @closePopup="$emit('closePopup')" class="absolute z-20">
    <div
      class="absolute z-30 rounded-2xl top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] min-w-[800px] h-[500px] bg-white"
    >
      <img
        @click="$emit('closePopup')"
        src="~/assets/images/popup/cross.png"
        alt="cross"
        class="absolute top-[10px] right-[10px] cursor-pointer"
      />
      <img
        class="absolute w-[300px] top-[-150px] left-[50px]"
        src="~/assets/images/popup/catalogue-popup-logo.png"
        alt="contact-popup-logo"
      />
      <div
        class="absolute rounded-xl right-[60px] top-[40px] px-9 py-2 w-fit bg-primary-red text-white font-bold select-none"
      >
        <span class="text-[40px]">CATALOGUE</span>
      </div>
      <div
        class="absolute bottom-[60px] px-12 w-full h-fit flex flex-row justify-center gap-[3rem]"
      >
        <img
          src="~/assets/images/popup/qr.png"
          alt=""
          class="w-[250px] self-center justify-self-start"
        />
        <div class="flex justify-center items-center">
          <span class="font-bold text-lg">or</span>
        </div>
        <button
          class="bg-secondary h-fit w-min px-[2rem] text-[40px] font-bold py-[0.5rem] rounded-md shadow-lg self-center justify-self-center"
        >
          Download
        </button>
      </div>
    </div>
  </BackDrop>
</template>

<script setup>
import BackDrop from './BackDrop.vue';

const props = defineProps({
  isActive: Boolean,
});
</script>

<style lang="scss" scoped>
img {
  user-select: none;
}
</style>
