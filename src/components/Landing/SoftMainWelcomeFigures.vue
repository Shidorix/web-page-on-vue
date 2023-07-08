<template>
  <div class="pocket"></div>
</template>

<style scoped lang="scss">
.pocket {
  position: relative;
  width: 100%;
  height: 22em;
}

.pocket::before,
.pocket::after {
  content: '';
  position: absolute;
  bottom: 300px;
  width: calc((1vw + 1vh) * 70);
  height: 100%;
}

.pocket::before {
  left: 49%;
  background-image: url('../../assets/image/Subtract2.png');
  transform: scale(-1, 1);
}

.pocket::after {
  right: 49%;
  background-image: url('../../assets/image/Subtract2.png');
  //   transform: scale(-1, 1)
}
</style>
