<template>
  <div class="relative bg-secondary">
    <CatalogPopup v-if="catalogPopupActive" class="absolute" />
    <ContactPopup v-if="contactPopupActive" class="absolute" />
    <TopBar @buttonClicked="(type) => enablePopup(type)" class="sticky top-0" />
    <section class="px-12">
      <Landing />
      <Divider />
      <CategoryList />
      <Divider />
    </section>
  </div>
</template>

<script setup>
import Divider from '~/components/Divider.vue';
import TopBar from '~/components/TopBar.vue';
import Landing from '~/components/Landing.vue';
import CatalogPopup from '~/components/Popup/CatalogPopup.vue';
import ContactPopup from '~/components/Popup/ContactPopup.vue';
import CategoryCard from '~~/components/CategoryCard.vue';
import CategoryList from '~~/components/CategoryList.vue';

const freezeScrolling = (isEnabled) => {
  if (isEnabled) {
    document.body.style.position = 'fixed';
  } else {
    document.body.style.position = '';
  }
};
const catalogPopupActive = ref(false);
const contactPopupActive = ref(false);
const enablePopup = (type) => {
  console.log('>>>', type);
  freezeScrolling(true);
  if (type === 'CATALOG') {
    catalogPopupActive.value = true;
  } else {
    contactPopupActive.value = true;
  }
};
const disablePopup = () => {
  freezeScrolling(false);
  catalogPopupActive.value = false;
  contactPopupActive.value = false;
};
</script>

<style scoped>
section {
  min-height: 100vh;
}
</style>
