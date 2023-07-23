<template>
  <q-header class="headerLayout row justify-center items-center" reveal :reveal-offset="350">
    <q-toolbar>
      <div class="row items-center full-width q-py-sm flex justify-between">
        <div class="row items-center justify-center col-2 no-wrap">
          <img src="../../assets/logos/logo.svg" alt="" />
          <p class="q-pl-md text-h4-for-logo">DanIso</p>
        </div>

        <div class="row justify-center no-wrap flex">
          <q-btn
            flat
            no-caps
            style="color: #ffffff"
            class="text-subtitle4-for-header"
          >
            <a class="q-px-xl">About</a>
          </q-btn>

          <q-btn
            flat
            no-caps
            style="color: #ffffff"
            class="text-subtitle4-for-header"
          >
            <a class="q-px-xl">Docs</a>
          </q-btn>

          <q-btn
            flat
            no-caps
            style="color: #ffffff"
            class="text-subtitle4-for-header"
          >
            <a class="q-px-xl">Price</a>
          </q-btn>
        </div>

        <div class="col-2 row justify-center items-center">
          <q-btn
            class="btn"
            outline
            style="color: rgb(255, 255, 255)"
            label="LOGIN"
          />
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script></script>

<style lang="scss" scoped>
.headerLayout {
  // background: #6c9aa9;
  background: #4b717e;
  height: calc((1vw + 1vh) * 4.5);
}

.btn {
  width: 150px;
  height: 50px;
}

p {
  margin: 0;
}

// @media only screen and (max-width: 1117px) {
//   p {
//     padding: 0px;
//   }
// }
</style>
