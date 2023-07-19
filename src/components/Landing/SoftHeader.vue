<template>
  <div class="row items-center justify-around no-wrap fit q-pt-md headerLayout" style="color: white;">
    <div class="row items-center">
      <img src="../../assets/logos/logo.svg" alt="" />
      <p class="q-pl-md text-h4-for-logo">DanIso</p>
    </div>

    <div class="col-6 row justify-center no-wrap">
      <a class="q-px-xl text-subtitle2">About</a>
      <a class="q-px-xl text-subtitle2">Services</a>
      <a class="q-px-xl text-subtitle2">Pricing</a>
    </div>

    <div>
      <q-btn
        class="btn"
        outline
        style="color: rgb(255, 255, 255)"
        label="LOGIN"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.headerLayout {
  background-color: #6c9aa9;
}

.btn {
  width: 200px;
  height: 70px;
}

p {
  margin: 0;
}
</style>
