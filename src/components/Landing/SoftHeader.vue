<template>
  <div>
    <q-header
      class="headerLayout row justify-center items-center"
      reveal
      :reveal-offset="350"
    >
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

          <q-btn
            dense
            flat
            round
            icon="menu"
            @click="$refs.drawer.show()"
            class="burger-menu-button"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer ref="drawer" side="right">
      <q-list padding class="menu-list">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>

          <q-item-section> Inbox </q-item-section>
        </q-item>

        <q-item active clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>

          <q-item-section> Star </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section>

          <q-item-section> Send </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="drafts" />
          </q-item-section>

          <q-item-section> Drafts </q-item-section>
        </q-item>

        <div class="row justify-center q-mt-md">
          <q-btn class="q-item_btn" outline style="color: #4b717e" label="LOGIN" />
        </div>
      </q-list>
    </q-drawer>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.headerLayout {
  // background: #6c9aa9;
  background: #4b717e;
}

.btn {
  width: 150px;
  height: 50px;
}

.q-item_btn {
  width: 150px;
  height: 50px;
}

.burger-menu-button {
  display: none;
}

.menu-list .q-item {
  border-radius: 0 32px 32px 0;
}

@media screen and (max-width: 1000px) {
  .burger-menu-button {
    display: block;
  }

  .text-subtitle4-for-header,
  .btn {
    display: none;
  }
  .headerLayout .col-2 {
    width: auto;
  }
}

p {
  margin: 0;
}
</style>
