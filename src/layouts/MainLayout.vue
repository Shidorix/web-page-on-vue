<template>
  <q-layout view="hHh LpR lff">
    <!-- <c-landing-main-header v-if="!currentUser" /> -->
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
</template>

<script setup lang="ts">
import MainHeader from '../components/Landing/SoftHeader.vue';
import MainFooter from '../components/Landing/SoftFooter.vue';
</script>
