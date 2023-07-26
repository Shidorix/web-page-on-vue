<template>
  <div
    class="row justify-center container items-center flex-wrap col-12 q-px-xl q-py-xl"
    style="z-index: 2"
  >
    <!-- z-index для того чтобы картинка с компонента выше, скрывалась под этим -->
    <div class="first-text col-12 col-lg-3">
      <div class="first-text__metka text-subtitle4">How it work</div>

      <h3 class="text-h3">
        Fast installation of any OS without a USB flash drive
      </h3>

      <p class="first-text__description text-subtitle5">
        Technical skills, design, business understanding, ability to put
        themselves in the merchant's shoes.
      </p>
    </div>

    <div class="column justify-center items-center first-img_wrapper">
      <div class="column col-12 col-lg-3 justify-center items-center">
        <img class="usb_img" src="../../assets/image/usb2.svg" alt="" />
        <img class="trash_img" src="../../assets/image/trash.svg" alt="" />
      </div>
    </div>

    <!-- Add a wrapper element around the text block -->
    <div class="col-12 col-lg-3 grid-item-custom-wrapper">
      <div class="grid-item-custom">
        <p class="text-h4">
          <span class="text-h1-for-number q-pr-md">1</span>
          <span style="padding-left: 20px">Download ISO</span>
        </p>
        <p class="text-h4">
          <span class="text-h1-for-number q-pr-md">2</span> Add into DanIso
        </p>
        <p class="text-h4">
          <span class="text-h1-for-number q-pr-md">3</span> Done
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  if (ScrollTrigger.isTouch !== 1) {
    console.log('animate usb');

    gsap.fromTo(
      '.usb_img',
      { y: 0 },
      {
        y: 290,
        scrollTrigger: {
          trigger: '.usb_img',
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }
});
</script>

<style scoped lang="scss">
img {
  max-width: 100% !important;
  height: auto !important;
}

.grid-item-custom-wrapper {
  display: flex;
  justify-content: center;
}

.grid-item-custom {
  white-space: nowrap;
}

.first-text {
  width: 25%;
}

.first-text__metka {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 10px;
  margin-bottom: 5px;
  border-radius: 64px;
  background: #6c9aa99a;
  width: 120px;
  height: 30px;
  flex-shrink: 0;
  padding-top: 3px;
  text-align: center;
}

.usb_img {
  z-index: 1;
}

.trash_img {
  z-index: 2;
}
@import '../../css/media/mediaSoftDescription.scss';
</style>
