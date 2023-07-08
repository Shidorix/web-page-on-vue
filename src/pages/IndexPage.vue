<template>
  <q-page style="overflow-x: hidden">
    <main>
      <soft-welcome />
      <soft-main-welcome-figures />
      <soft-description />
    </main>
  </q-page>
</template>

<script setup lang="ts">
import SoftWelcome from '../components/Landing/SoftWelcome.vue';
import SoftMainWelcomeFigures from '../components/Landing/SoftMainWelcomeFigures.vue';
import SoftDescription from 'src/components/Landing/SoftDescription.vue';
</script>
