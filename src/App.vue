<template>
      <router-view v-slot="{ Component }">
        <keep-alive exclude="Document">
          <component :is="Component" />
        </keep-alive>
      </router-view>
</template>

<script setup>

</script>
