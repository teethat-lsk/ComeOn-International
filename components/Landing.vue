<template>
  <div class="p-12 bg-secondary">
    <h1 class="text-[64px] text-primary-red mb-4">
      COME ON INTERNATIONAL,CO.,LTD. บริษัท คัมออน อินเตอร์เนชั่นแนล จำกัด
    </h1>
    <div class="flex gap-12 justify-center">
      <div class="flex-1 flex flex-col gap-12">
        <h1 class="text-[40px] text-black">
          จำหน่ายสินค้างานรถยนต์ทุกชนิด <br />
          และสินค้าสิ้นเปลืองในงานอุตสาหกรรม
        </h1>
        <p class="text-[32px] text-black">
          ที่อยู่ : 3 ซอยโสภณ2 ถนนวัดโสภณ ตำบลมาบตาพุด อำเภอเมืองระยอง
          จังหวัดระยอง 21150 เลขประจำตัวผู้เสียภาษี:0215565007753 Tel:
          065-256-1979,081-6397465 Email: sami.comeon@gmail.com
        </p>
      </div>
      <div>
        <img
          src="~/assets/images/landing-logo.png"
          alt="TurnOn-Logo"
          class="w-[360px] h-[360px]"
        />
      </div>
    </div>
    <Divider />
    <ProductCard v-for="(item,index) in CatalogData " :name="item.name" :index="index%2" />
  </div>
</template>

<script setup>
import CatalogData from '~/assets/data/catalog.json'
import Divider from './Divider.vue';
import ProductCard from './ProductCard.vue';
</script>

<style lang="scss" scoped></style>
