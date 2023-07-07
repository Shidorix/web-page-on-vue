<template>
  <body style="color: white">
    <div class="justify-center items-center column">
      <h1 class="text-h1">DanIso</h1>
      <p class="text-subtitle1">Install OS without USB</p>
      <button class="text-subtitle3">Download DanIso</button>
    </div>

    <div class="q-pt-xl row justify-center">
      <div class="pocket">
        <img src="../../assets/image/picture1.png" alt="" />
      </div>
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

.pocket {
  position: relative;
}

.pocket::before,
.pocket::after {
  content: '';
  position: absolute;
  bottom: 200px;
  width: 1322.632px;
  height: 445.995px;
  transform: rotate(14.071deg);
  border-radius: 1322.632px;
  background-color: white;
}

.pocket::before {
  left: -50%
}

.pocket::after {
  right: -50%;
  width: 1322.632px;
  height: 445.995px;
  transform: rotate(165.929deg);
  border-radius: 1322.632px;
}
</style>
