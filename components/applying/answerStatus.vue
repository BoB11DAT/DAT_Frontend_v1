<template>
  <div class="answer_status_list_panel">
    <template v-for="(category, n) in props.categories" :key="n">
      <h1 :class="{ app_h1: n === '1' }">{{ category }}</h1>
      <hr />
      <template v-for="(judge, o) in props.judges" :key="o">
        <div
          v-if="
            !(judge.applying_judge_number % 5) && judge.judge_category === n * 1
          "
          class="number_line"
        >
          <p
            v-for="i in 5"
            :key="i"
            :class="{
              disabled: !checkWrited(judge.applying_judge_number + i - 5),
            }"
          >
            {{ judge.applying_judge_number + i - 5 }}
          </p>
        </div>
        <hr
          v-if="
            ((o + 1) % 25 === 0 || o + 1 === JUDGEAMOUNT) &&
            judge.judge_category === n * 1
          "
        />
      </template>
    </template>
    <div class="flex_panel">
      <p class="text">답한 문항</p>
      <span class="circle"></span>
      <p class="number">{{ writed }}</p>
    </div>
    <div class="flex_panel">
      <p class="text">답하지 않은 문항</p>
      <span class="circle disabled"></span>
      <p class="number">{{ JUDGEAMOUNT - writed }}</p>
    </div>
    <button @click="$emit('endApplying')">제출하기</button>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from "vue";
import { Judge } from "~/interfaces/judge";
import { useApplyingAnswerStore } from "~/store/applyingAnswer";
import { JUDGEAMOUNT } from "~/constants/judgeAmount";

// eslint-disable-next-line no-undef
const props = defineProps({
  judges: {
    type: Object as PropType<Judge[]>,
    required: true,
  },
  categories: {
    type: Object as PropType<Object>,
    required: true,
  },
});
const emit = defineEmits(["endApplying"]);
const applyingAnswerStore = useApplyingAnswerStore();
const writed = computed(() => {
  let count = 0;
  for (let i = 1; i <= JUDGEAMOUNT; i++) {
    if (
      applyingAnswerStore.getApplyingAnswer[i]?.answer &&
      applyingAnswerStore.getApplyingAnswer[i]?.vector
    ) {
      count++;
    }
  }
  return count;
});
const checkWrited = computed(function () {
  return (num) => {
    if (
      applyingAnswerStore.getApplyingAnswer[num]?.answer &&
      applyingAnswerStore.getApplyingAnswer[num]?.vector
    ) {
      return true;
    }
    return false;
  };
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/applying/answerStatus/style.scss";
</style>
