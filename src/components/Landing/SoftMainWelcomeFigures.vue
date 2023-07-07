<template>
  <div class="pocket"></div>
</template>

<style scoped lang="scss">
.pocket {
  position: relative;
  width: 100%;
  height: 500px;
}

.pocket::before,
.pocket::after {
  content: '';
  position: absolute;
  bottom: 350px;
  width: calc((1vw + 1vh) * 33);
  height: 500px;
}

.pocket::before {
  left: 50%;
  background-image: url('../../assets/image/Subtract.png');
  transform: scale(-1, 1);
}

.pocket::after {
  right: 50%;
  background-image: url('../../assets/image/Subtract.png');
  //   transform: scale(-1, 1)
}
</style>
