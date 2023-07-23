<template>
  <body style="color: white">
    <div class="justify-center items-center column main-text">
      <h1 class="text-h1">DanIso</h1>
      <p class="text-subtitle1">Install OS without USB</p>
      <button class="text-subtitle3">Download DanIso</button>
    </div>

    <circleVue class="circle1" data-speed="0.5" />
    <circleVue class="circle2" data-speed="0.5" />

    <div class="q-pt-xl row justify-center main-pic">
      <div>
        <img
          src="../../assets/image/picture1.png"
          alt=""
          class="main-pic_img"
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

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  console.log('Animating mainpic');

  if (ScrollTrigger.isTouch !== 1) {
    gsap.fromTo(
      '.main-pic_img',
      { y: 0 },
      {
        y: 200,
        scrollTrigger: {
          trigger: '.main-pic_img',
          start: 'top center',
          end: 'bottom',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.main-text',
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: '.main-text',
          start: 'top top',
          end: '420',
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

.main-pic {
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
  min-width: 230px;
  min-height: 58px;
  flex-shrink: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  transition: transform 0.3s;
}

button:hover {
  transform: scale(1.1);
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
