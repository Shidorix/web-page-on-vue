<template>
  <body style="color: white">
    <div class="justify-center items-center column">
      <h1 class="text-h1">DanIso</h1>
      <p class="text-subtitle1">Install OS without USB</p>
      <button class="text-subtitle3">Download DanIso</button>
    </div>

    <div class="q-pt-xl row justify-center">
      <img src="../../assets/image/picture1.png" alt="" />
    </div>

    <div class="welcomeSubtract no-wrap">
      <img class="image1" src="../../assets/image/Subtract.png" alt="" />
      <img class="image2" src="../../assets/image/Subtract.png" alt="" />
    </div>
  </body>
</template>

<style lang="scss" scoped>
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
}

.welcomeSubtract {
  position: relative;
  top: 0;
  left: 0;
}

.image1 {
  position: relative;
}

.image2 {
  transform: scale(-1, 1);
  position: absolute;
  left: calc((1vw + 1vh) * 30);
}
</style>
