<template>
  <div class="relative">
    <BackDrop class="absolute z-10"/>
    <TopBar class="sticky top-0" />
    <section>
      <Landing />
    </section>
  </div>
</template>

<script setup>
import TopBar from './components/TopBar.vue';
import Landing from './components/Landing.vue';
import BackDrop from './components/Popup/BackDrop.vue';
</script>

<style scoped>
section {
  min-height: 100vh;
}
</style>
