<template>
  <q-header class="headerLayout" reveal :reveal-offset="350">
    <q-toolbar>
      <div class="row items-center justify-around full-width q-py-sm">
        <div class="row items-center">
          <img src="../../assets/logos/logo.svg" alt="" />
          <p class="q-pl-md text-h4-for-logo">DanIso</p>
        </div>

        <div class="col-6 row justify-center no-wrap">
          <q-btn flat no-caps style="color: #ffffff" class="text-subtitle4-for-header">
            <a class="q-px-xl">About</a>
          </q-btn>

          <q-btn flat no-caps style="color: #ffffff" class="text-subtitle4-for-header">
            <a class="q-px-xl">Docs</a>
          </q-btn>

          <q-btn flat no-caps style="color: #ffffff" class="text-subtitle4-for-header">
            <a class="q-px-xl">Price</a>
          </q-btn>
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
    </q-toolbar>
  </q-header>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
    };
  },
};
</script>

<style lang="scss" scoped>
.headerLayout {
  // background: #6c9aa9;
  background: #4b717e;
}

.btn {
  width: 150px;
  height: 50px;
}

p {
  margin: 0;
}

a {
}
a:hover {
}
</style>
