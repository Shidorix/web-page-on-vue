<template>
  <div class="row items-center justify-center q-px-xl">
    <div class="line" />
  </div>

  <div class="col-12 row justify-center container">
    <div class="col-12 col-lg-6 justify-center row">
      <img src="../../assets/image/cat1.png" alt="" />
    </div>

    <div class="col-12 col-lg-6 justify-center row">
      <div class="description-card-left__text">
        <div class="description-card-left__metka text-subtitle4">Features</div>

        <h3 class="text-h3">
          Fast installation of any OS without a USB flash drive
        </h3>

        <p class="text-subtitle5 q-pt-md">
          Technical skills, design, business understanding, ability to put
          themselves in the merchant's shoes.
        </p>
      </div>
    </div>
  </div>

  <div class="col-12 row justify-center container grid-container-right">
    <div class="col-12 col-lg-6 row justify-center grid-item">
      <div class="description-card-right__text">
        <div class="description-card-right__metka text-subtitle4">Features</div>

        <h3 class="text-h3">
          Fast installation of any OS without a USB flash drive
        </h3>

        <p class="text-subtitle5 q-pt-md">
          Technical skills, design, business understanding, ability to put
          themselves in the merchant's shoes.
        </p>
      </div>
    </div>

    <div class="col-12 col-lg-6 row justify-center grid-item">
      <img src="../../assets/image/cat1.png" alt="" />
    </div>
  </div>

  <div class="col-12 row justify-center container">
    <div class="col-12 col-lg-6 justify-center row">
      <img src="../../assets/image/cat1.png" alt="" />
    </div>

    <div class="col-12 col-lg-6 justify-center row">
      <div class="description-card-left__text">
        <div class="description-card-left__metka text-subtitle4">Features</div>

        <h3 class="text-h3">
          Fast installation of any OS without a USB flash drive
        </h3>

        <p class="text-subtitle5 q-pt-md">
          Technical skills, design, business understanding, ability to put
          themselves in the merchant's shoes.
        </p>
      </div>
    </div>
  </div>

  <div class="col-12 row justify-center container grid-container-right">
    <div class="col-12 col-lg-6 row justify-center grid-item">
      <div class="description-card-right__text">
        <div class="description-card-right__metka text-subtitle4">Features</div>

        <h3 class="text-h3">
          Fast installation of any OS without a USB flash drive
        </h3>

        <p class="text-subtitle5 q-pt-md">
          Technical skills, design, business understanding, ability to put
          themselves in the merchant's shoes.
        </p>
      </div>
    </div>

    <div class="col-12 col-lg-6 row justify-center grid-item">
      <img src="../../assets/image/cat1.png" alt="" />
    </div>

  </div>
</template>

<style scoped lang="scss">
img {
  max-width: 100% !important;
  height: auto !important;
}
.container {
  padding: 10% 0 10% 0;
}
.line {
  margin-top: 135px;
  margin-bottom: 135px;
  width: 1461px;
  height: 4px;
  background: #d9d9d9;
}

.description-card-left {
  padding-top: 200px;
}

.description-card-left__text {
  width: 65%;
  // padding-left: 243px;
}

.description-card-left__metka {
  position: relative;
  left: 10px;
  margin-bottom: 5px;
  border-radius: 64px;
  background: #6c9aa99a;
  width: 120px;
  height: 30px;
  flex-shrink: 0;
  padding-top: 3px;
  text-align: center;
}

// for right card

.description-card-right {
  padding-top: 200px;
}
.description-card-right__text {
  width: 65%;
}

.description-card-right__metka {
  position: relative;
  left: 10px;
  margin-bottom: 5px;
  border-radius: 64px;
  background: #6c9aa99a;
  width: 120px;
  height: 30px;
  flex-shrink: 0;
  padding-top: 3px;
  text-align: center;
}

@media only screen and (max-width: 1439px) {

  img {
    padding-bottom: 5%;
  }

  .grid-container-right .grid-item:nth-child(1) {
    order: 2;
  }
  .grid-container-right .grid-item:nth-child(2) {
    order: 1;
  }
}
</style>
