<template>
  <div class="container q-px-xl">
    <div class="line" />
  </div>

  <div class="description-card-left row justify-center items-center no-wrap q-px-xl">
    <img src="../../assets/image/cat1.png" alt="" />
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


  <div class="description-card-right row justify-center items-center no-wrap q-px-xl">
    
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

    <img src="../../assets/image/cat1.png" alt="" />

  </div>

  <div class="description-card-left row justify-center items-center no-wrap q-px-xl">
    <img src="../../assets/image/cat1.png" alt="" />
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

  <div class="description-card-right row justify-center items-center no-wrap q-px-xl">
    
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

    <img src="../../assets/image/cat1.png" alt="" />

  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 35%;
  padding-left: 243px;
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
  width: 35%;
  padding-right: 243px;
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
</style>
