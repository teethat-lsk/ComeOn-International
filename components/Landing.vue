<template>
  <div id="LANDING" class="mobile:w-100%">
    <Carousel :wrap-around="true">
      <Slide index="0">
        <div>
          <h1
            class="text-left text-[64px] mobile:text-[20px] text-primary-red mb-4"
          >
            COME ON INTERNATIONAL,CO.,LTD. <br />
            บริษัท คัมออน อินเตอร์เนชั่นแนล จำกัด
          </h1>
          <div class="flex gap-12 mobile:gap-10 justify-center mobile:items-center">
            <div class="flex-1 flex flex-col gap-12 ">
              <h1 class="text-left text-[40px] mobile:text-[17px] text-black">
                จำหน่ายสินค้างานรถยนต์ทุกชนิด <br />
                และสินค้าสิ้นเปลืองในงานอุตสาหกรรม
              </h1>
              <p
                class="mobile:hidden text-left text-[32px] mobile:text-[15px] text-black "
              >
                ที่อยู่ : 3 ซอยโสภณ2 ถนนวัดโสภณ ตำบลมาบตาพุด <br />
                อำเภอเมืองระยอง จังหวัดระยอง 21150 <br />
                เลขประจำตัวผู้เสียภาษี:0215565007753 <br />
                Tel: 065-256-1979,081-6397465 <br />
                Email: sami.comeon@gmail.com
              </p>
            </div>
            <div>
              <img
                src="~/assets/images/landing-logo.png"
                alt="TurnOn-Logo"
                class="w-[360px] h-[360px] mobile:h-[80px] mobile:w-[80px]"
              />
            </div>
          </div>
          <div>
            <p
              class="text-left text-[32px] mobile:text-[15px] hidden text-black mobile:block mt-4"
            >
              ที่อยู่ : 3 ซอยโสภณ2 ถนนวัดโสภณ ตำบลมาบตาพุด <br />
              อำเภอเมืองระยอง จังหวัดระยอง 21150 <br />
              เลขประจำตัวผู้เสียภาษี:0215565007753 <br />
              Tel: 065-256-1979,081-6397465 <br />
              Email: sami.comeon@gmail.com
            </p>
          </div>
        </div>
      </Slide>

      <Slide index="1">
        <div class="py-8">
          <img
            src="~/assets/images/landing-slide.png"
            alt="landing-cover"
            class="h-[700px] mobile:h-[300px]"
          />
        </div>
      </Slide>

      <Slide index="2">
        <div class="py-8">
          <img
            src="~/assets/images/landing-slide.png"
            alt="landing-cover"
            class="h-[700px] mobile:h-[300px]"
          />
        </div>
      </Slide>
      <template #addons>
        <Navigation v-if="disableCarouselAddon" />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const screenWidth = window.innerWidth;
const disableCarouselAddon = computed(() => screenWidth < '640px');
</script>

<style lang="scss" scoped></style>
