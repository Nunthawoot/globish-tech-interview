<template>
  <div class="p-[26px] space-y-10 border rounded-[20px] bg-white">
    <h1>{{ Question }}</h1>
    <h1>{{ title }}</h1>
    <div class="space-y-4">
      <div v-for="item in Choice" :key="item.title">
        <input
          :type="multiselect ? 'checkbox' : 'radio'"
          :id="`choice_${item.title}`"
          :value="item.title"
          v-model="selectedOptions"
          @change="onSelectChoice(item)"
          class="hidden"
          aria-hidden="true"
        />
        <label
          :for="`choice_${item.title}`"
          :class="{
            'bg-orange choice': selectedOptions.includes(item.title),
            'bg-white choice': !selectedOptions.includes(item.title),
          }"
        >
          {{ item.title }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  Question: String,
  title: String,
  Choice: {
    type: Array,
    default: () => [],
    validator: (value) => {
      return value.every((item) => {
        return typeof item.title === "string" && typeof item.point === "number";
      });
    },
  },
  multiselect: Boolean,
  selectChoice: {
    type: [Array, String],
    default: () => [],
  },
});

const selectedOptions = ref(props.selectChoice);
const emits = defineEmits(["choice-selected", "choices-selected"]);

watch(
  () => props.selectChoice,
  (newValue) => {
    selectedOptions.value = newValue;
  }
);

const onSelectChoice = (item) => {
  emits("choice-selected", { value: selectedOptions.value, point: item.point });
};
</script>

<style lang="scss">
.choice {
  @apply flex gap-x-2 items-center px-6 py-5 rounded-[20px] border;
}
</style>
