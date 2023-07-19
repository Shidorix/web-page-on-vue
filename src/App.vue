<template>
  <div class="wrapper">
    <div class="content">
      <router-view v-slot="{ Component }">
        <keep-alive exclude="Document">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import setupScroll from './sdk/animations/setupScroll.js';

setupScroll()
</script>
