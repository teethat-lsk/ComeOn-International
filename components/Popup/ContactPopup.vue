<template> 
    <div
      class="absolute z-30 rounded-2xl top-[40%] left-[50%] translate-y-[-50%] translate-x-[-50%] min-w-[800px] h-[500px] bg-white"
    >
      <img
        class="absolute w-[300px] top-[-150px] left-[50px]"
        src="~/assets/images/popup/contact-popup-logo.png"
        alt="contact-popup-logo"
      />
      <div
        class="absolute rounded-xl right-[60px] top-[40px] px-9 py-2 w-fit bg-primary-red text-white font-bold"
      >
        <span class="text-[40px]">CONTACT</span>
      </div>
      <div class="absolute bottom-[60px] left-[60px] w-fit h-fit flex flex-col gap-4">
        <div class="flex gap-5 items-center">
          <img
            src="~/assets/images/popup/line-logo.png"
            alt=""
            class="w-[80px]"
          />
          <span class="text-[48px]">@273cozby</span>
        </div>
        <div class="flex gap-5 items-center">
          <img
            src="~/assets/images/popup/phone-logo.png"
            alt=""
            class="w-[80px]"
          />
          <span class="text-[48px]">065-256-1979</span>
        </div>
        <div class="flex gap-5 items-center">
          <img
            src="~/assets/images/popup/mail-logo.png"
            alt=""
            class="w-[80px]"
          />
          <span class="text-[48px]">sami.comeon@gmail.com</span>
        </div>
      </div>
    </div>
    <BackDrop is-active="true" class="absolute z-20" />
</template>

<script setup>
import BackDrop from './BackDrop.vue';
</script>

<style lang="scss" scoped></style>
