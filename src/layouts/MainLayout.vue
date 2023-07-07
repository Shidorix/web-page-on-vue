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
  </q-layout>
</template>

<script setup lang="ts">
import MainHeader from '../components/Landing/SoftHeader.vue';
</script>
