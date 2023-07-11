<template>
  <div class="row justify-center container">
    <div class="faq-card__text q-mr-xl">
      <div class="faq-card__metka text-subtitle4">Features</div>

      <h3 class="text-h3">
        Fast installation of any OS without a USB flash drive
      </h3>

      <p class="text-subtitle5 q-pt-md">
        Technical skills, design, business understanding, ability to put
        themselves in the merchant's shoes.
      </p>
    </div>

    <q-list class="faq-wrapper my-faq">
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
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
    },
    {
      question: 'Question 4',
      answer: 'Answer 4',
    },
  ] as FaqItem[],
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: 300px;
  padding-bottom: 300px;
}
.faq-wrapper {
  border-radius: 12px 12px 12px 12px;
  border: 3px solid #6c9aa9;
  background: #fff;
  box-shadow: 0px 32px 64px 0px rgba(57, 20, 0, 0.04);
  min-width: 937px;
  flex-shrink: 0;
}

.faq-card__text {
  max-width: 35%;
  padding-left: 243px;
}

.faq-card__metka {
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
</style>
