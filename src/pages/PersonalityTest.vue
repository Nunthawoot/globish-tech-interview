<template>
  <div class="space-y-10 py-20 h-screen w-full bg-blue">
    <div :class="`flex gap-x-1`">
      <div
        v-for="(question, index) in Question"
        :key="index"
        :class="`rounded-full h-[10px] w-full ${
          index <= store.count ? 'bg-black' : 'bg-white'
        }`"
      ></div>
    </div>
    <QuestionCard
      :Question="Question[store.count].Question"
      :title="Question[store.count].title"
      :Choice="Question[store.count].Choice"
      :multiselect="Question[store.count].multiselect"
      :selectChoice="store.resultList[store.count]?.value || []"
      @choice-selected="updateChoice"
    />

    <div class="flex gap-x-[20px]">
      <button
        class="py-1 w-1/3 rounded-full border bg-white"
        @click="backQuestion"
      >
        กลับ
      </button>
      <button
        class="py-1 w-2/3 rounded-full border bg-yellow"
        @click="
          store.count === Question.length - 1 ? summitResult() : nextQuestion()
        "
      >
        {{ store.count === Question.length - 1 ? "ดูผลลัพธ์" : "ต่อไป" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import QuestionCard from "@/components/QuestionCard.vue";
import QuestionList from "../static/Question.json";
import { store } from "../store.ts";
const router = useRouter();
const Question = ref(QuestionList);

const nextQuestion = () => {
  if (QuestionList.length === store.count) {
    return;
  }
  if (store.resultList[store.count]) {
    store.increment();
  }
};

const backQuestion = () => {
  if (store.count !== 0) {
    store.decrement();
  }
};

const updateChoice = (selectedChoice) => {
  store.resultList[store.count] = selectedChoice;
};

const summitResult = () => {
  store.resultList.forEach((choice) => {
    const point = choice.point;
    store.totalPoints += point;
  });
  router.push("/ResultPage");
};
</script>
