<template>
  <div class="grid-container q-px-xl">
    <div class="column items-center first-text grid-item">
      <div class="first-text__metka text-subtitle4">How it work</div>

      <h3 class="text-h3">
        Fast installation of any OS without a USB flash drive
      </h3>

      <p class="first-text__description text-subtitle5">
        Technical skills, design, business understanding, ability to put
        themselves in the merchant's shoes.
      </p>
    </div>

    <div class="column grid-item-custom">
      <p class="text-h4">
        <span class="text-h1-for-number q-pr-md">1</span>
        <span style="padding-left: 20px">Download ISO</span>
      </p>
      <p class="text-h4">
        <span class="text-h1-for-number q-pr-md">2</span> Add into DanIso
      </p>
      <p class="text-h4">
        <span class="text-h1-for-number q-pr-md">3</span> Done
      </p>
    </div>

    <div class="column img_wrapper grid-item">
      <img class="usb_img" src="../../assets/image/usb2.svg" alt="" />
      <img class="trash_img" src="../../assets/image/trash.svg" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  padding-top: 200px;
  padding: 0px 100px 0 100px;
}

.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-item-custom {
  display: flex;
  justify-content: center;
  padding-left: 100px;
}

.first-text {
  width: 100%;
  // padding-left: 150px;
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

@media only screen and (max-width: 1200px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
  .grid-container-right .grid-item:nth-child(1) {
    order: 2;
  }
  .grid-container-right .grid-item:nth-child(2) {
    order: 1;
  }

  .grid-item-custom {
  align-items: center;
  padding-left: 0px;
}
}
</style>
