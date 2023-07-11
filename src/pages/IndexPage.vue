<template>
  <q-page style="overflow-x: hidden">
    <main>
      <soft-welcome />
      <soft-main-welcome-figures />
      <soft-description />
      <soft-information />
      <soft-discord />
      <soft-f-a-q />
    </main>
  </q-page>
</template>

<script setup lang="ts">
import SoftWelcome from '../components/Landing/SoftWelcome.vue';
import SoftMainWelcomeFigures from '../components/Landing/SoftMainWelcomeFigures.vue';
import SoftDescription from 'src/components/Landing/SoftDescription.vue';
import SoftInformation from 'src/components/Landing/SoftInformation.vue';
import SoftDiscord from 'src/components/Landing/SoftDiscord.vue';
import SoftFAQ from 'src/components/Landing/SoftFAQ.vue';
</script>
