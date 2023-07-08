<template>
  <div class="row justify-center items-center">
    <div class="column items-center first-text">
      <div class="first-text__metka text-subtitle4">How it work</div>

      <h3 class="text-h3">
        Fast installation of any OS without a USB flash drive
      </h3>

      <p class="first-text__description text-subtitle5">
        Technical skills, design, business understanding, ability to put
        themselves in the merchant's shoes.
      </p>
    </div>

    <div class='column'>
      <p class="text-h4">
        <span class="text-h1-for-number q-pr-md">1</span> <span style="padding-left: 10px;">Download ISO</span>
      </p>
      <p class="text-h4">
        <span class="text-h1-for-number q-pr-md">2</span> Add into DanIso
      </p>
      <p class="text-h4">
        <span class="text-h1-for-number q-pr-md">3</span> Done
      </p>
    </div>

    <div class="column">
      <img src="../../assets/image/usb.png" alt="" />
      <img src="../../assets/image/trash.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 300px;
  height: 300px;
}

.first-text {
  width: 35%;
  padding-right: 50px;
}
.first-text__description {
//   width: 85%;
}

.first-text__metka {
  position: relative;
  right: 40%;
  margin-bottom: 5px;
  border-radius: 64px;
  background: #6c9aa99a;
  width: 120px;
  height: 30px;
  flex-shrink: 0;
  padding-top: 3px;
  text-align: center;
}
</style>
