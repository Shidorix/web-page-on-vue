<template>
  <body style="color: white" class="body-section">
    <div class="justify-center items-center column">
      <h1 class="text-h1">DanIso</h1>
      <p class="text-subtitle1">Install OS without USB</p>
      <button class="text-subtitle3">Download DanIso</button>
    </div>

    <circleVue class="circle1" />
    <circleVue class="circle2" />

    
      <div class="q-pt-xl row justify-center mainpic">
        <div>
          <img
            src="../../assets/image/picture1.png"
            alt=""
            class="mainpic_img"
          />
        </div>
      </div>

      <div class="pocket-container">
        <img class="pocket" src="../../assets/image/Subtract.svg" alt="" />
      </div>
    
  </body>
</template>

<script setup>
import circleVue from '../../composables/SoftCircle.vue';
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother.min.js';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  console.log('Animating mainpic');

  if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });

    gsap.fromTo(
      '.mainpic_img',
      { y: 0 },
      {
        y: 200,
        scrollTrigger: {
          trigger: '.mainpic_img',
          start: 'top center',
          end: 'bottom',
          scrub: true,
        },
      }
    );
  }
});
</script>

<style lang="scss" scoped>
.pocket {
  position: absolute;
  z-index: 2;
  width: 100%;
  object-fit: contain;
  height: auto;
  bottom: 50%;
  margin-bottom: -5px;
}

.pocket-container {
  position: relative;
}

.mainpic {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.images_wrapper {
  overflow: hidden;
}
body {
  background-color: #6c9aa9;
  padding-top: 191px;
}

button {
  border-radius: 64px;
  border: 2px solid #f1eadc;
  background: #f1eadc;
  width: 180px;
  height: 52px;
  flex-shrink: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

img {
  width: calc((1vw + 1vh) * 34);
}
.circle1 {
  position: absolute;
  left: 10%;
  top: 1%;
}

.circle2 {
  position: absolute;
  left: 86%;
  top: 3.8%;
}
</style>
