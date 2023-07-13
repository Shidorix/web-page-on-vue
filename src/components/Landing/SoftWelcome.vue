<template>
  <body style="color: white">
    <div class="justify-center items-center column">
      <h1 class="text-h1">DanIso</h1>
      <p class="text-subtitle1">Install OS without USB</p>
      <button class="text-subtitle3">Download DanIso</button>
    </div>

    <circleVue class="circle1" />
    <circleVue class="circle2" />

    <div class="q-pt-xl row justify-center mainpic">
      <div>
        <img src="../../assets/image/picture1.png" alt="" />
      </div>
    </div>

    <div class="pocket-container">
      <img class="pocket" src="../../assets/image/Subtract8.svg" alt="" />
    </div>
    
  </body>
</template>

<script setup lang="ts">
import circleVue from '../../composables/SoftCircle.vue';
</script>

<style lang="scss" scoped>
.pocket {
  position: absolute;
  z-index: 2;
  width: 100%;
  object-fit: contain;
  height: auto;
  bottom: 50%;
}

.pocket-container {
  position: relative;
}

.mainpic {
  position: relative; /* Добавлено позиционирование */
  z-index: 1; /* Изменено значение z-index на 1 */
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
