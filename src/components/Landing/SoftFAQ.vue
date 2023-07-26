<template>
  <div class="row justify-center container items-center flex-wrap col-12">
    <div class="faq-card__text q-pb-xl q-pl-xl col-12 col-lg-3">
      <div class="faq-card__metka text-subtitle4">Features</div>

      <h3 class="text-h3">
        Fast installation of any OS without a USB flash drive
      </h3>

      <p class="text-subtitle5 q-pt-md">
        Technical skills, design, business understanding, ability to put
        themselves in the merchant's shoes.
      </p>
    </div>
    <div class="column items-center col-12 col-lg-6">
      <img src="../../assets/image/oblako.svg" alt="" class="q-pb-xl">

      <q-list class="faq-wrapper">
        <q-expansion-item
          expand-icon='img:up.svg'
          class="text-h4-for-faq faq-wrapper_text q-px-xl q-py-xl"
          v-for="(item, index) in state.faq"
          :key="index"
          :label="item.question"
        >
          <div class="text-subtitle4-for-faq q-py-lg">{{ item.answer }}</div>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface FaqItem {
  question: string;
  answer: string;
}

const state = reactive({
  faq: [
    {
      question: 'Its free?',
      answer: 'Yes',
    },
    {
      question: 'Can i install any OS or just Windows',
      answer: 'Poshel nahuy',
    },
    {
      question: 'Are you support Russia or ukraine?',
      answer: 'umm))',
    },
    {
      question: 'Can i give you all my money?',
      answer: 'I would say you must do it',
    },
  ] as FaqItem[],
});
</script>

<style lang="scss" scoped>

img {
  max-width: 100%;
  height: auto;
}
.container {
  padding-top: 300px;
  padding-bottom: 300px;
}
.faq-wrapper {
  border-radius: 12px 12px 12px 12px;
  border: 3px solid #6c9aa9;
  background: #fff;
  box-shadow: 0px 32px 64px 0px rgba(57, 20, 0, 0.04);
  width: 90%;
  flex-shrink: 0;
}

.faq-card__text {
  min-width: 45%;
}

.faq-card__metka {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 10px;
  margin-bottom: 5px;
  border-radius: 64px;
  background: #6c9aa99a;
  width: 120px;
  height: 30px;
  flex-shrink: 0;
  padding-top: 3px;
  text-align: center;
}

@import '../../css/media/mediaSoftFAQ.scss'
</style>
