<template>
  <section class="footer-wrapper">
    <div
      class="row items-center justify-around no-wrap fit q-pt-md headerLayout footer-wrapper__header"
      style="color: white"
    >
      <div class="row items-center">
        <img src="../../assets/logos/logo.svg" alt="" />
        <p class="q-pl-md text-h4-for-logo">DanIso</p>
      </div>

      <div class="col-6 row justify-center no-wrap">
        <a class="q-px-xl text-subtitle2">About</a>
        <a class="q-px-xl text-subtitle2">Services</a>
        <a class="q-px-xl text-subtitle2">Pricing</a>
      </div>
    </div>

    <div class="justify-center row">
      <hr class="footer-line" />
    </div>

    <div class="row justify-around q-py-xl">
      <p class="text-subtitle6">
        Copyright © 2022 DanIso. All Rights Reserved.
      </p>

      <div>
        <a href="#" class="q-px-sm"><img src="../../assets/image/tg.svg" alt="" /></a>
        <a href="#" class="q-px-sm"><img src="../../assets/image/tw.svg" alt="" /></a>
        <a href="#" class="q-px-sm"><img src="../../assets/image/fb.svg" alt="" /></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  background-color: #4b717e;
}
.footer-wrapper__header {
  padding: 5% 0 5% 0;
}

.footer-line {
  width: 80%;
  height: 1px;
  flex-shrink: 0;
  border: 0px solid #000;
  background: #d9d9d9;
  //   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

p {
  margin: 0;
}
</style>
