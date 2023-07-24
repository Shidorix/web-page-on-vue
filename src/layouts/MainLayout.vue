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
        <!-- <q-page-sticky
          position="bottom-right"
          :offset="[18, 18]"
          v-show="scrolled"
        >
          <q-btn
            round
            color="primary"
            icon="expand_less"
            @click="scrollToTop"
          />
        </q-page-sticky> -->
      </q-layout>
    </div>
  </div>
</template>

<script setup>
import MainHeader from '../components/Landing/SoftHeader.vue';
import MainFooter from '../components/Landing/SoftFooter.vue';
import setupScroll from '../sdk/animations/setupScroll';

setupScroll();
// import { onMounted, ref } from 'vue';
// import { gsap } from 'gsap';

// const scrolled = ref(false);

// const smoother = setupScroll();

// onMounted(() => {
//   const smootherContainer = smoother.wrapper;
//   smootherContainer.addEventListener('scroll', () => {
//     scrolled.value = smootherContainer.scrollTop > 100;
//   });
// });

// const scrollToTop = () => {
//   const smootherContainer = smoother.container;
//   gsap.to(smootherContainer, { duration: 0.5, scrollTo: 0 });
// };
</script>

<style></style>
