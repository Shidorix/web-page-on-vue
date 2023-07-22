<template>
  <div class="wrapper">
    <div class="content">
      <q-layout view="hHh LpR lff">
        <MainHeader />

        <q-page-container>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </q-page-container>

        <MainFooter />
      </q-layout>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainHeader from '../components/Landing/SoftHeader.vue';
import MainFooter from '../components/Landing/SoftFooter.vue';
import setupScroll from '../sdk/animations/setupScroll';

setupScroll();
</script>

<style>

</style>
