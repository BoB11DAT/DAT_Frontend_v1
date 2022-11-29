<template>
  <div class="judges_panel">
    <div v-for="(category, n) in props.categories" :key="n" class="judge_panel">
      <div class="judge_header_panel">
        <h1>{{ category }}</h1>
        <p>해당 영역은 {{ category }} 분석에 관한 부분이다.</p>
      </div>
      <div class="question_answer_panel">
        <template v-for="(judge, o) in props.judges" :key="o">
          <div
            v-if="judge.judge_category === n * 1"
            class="question_answer_item"
          >
            <p class="question">
              Q{{ judge.receipt_judge_number.toString().padStart(2, "0") }}.
              {{ judge.judge_content }}
            </p>
            <div
              v-if="
                applyingAnswerStore.applyingAnswer[judge.receipt_judge_number]
              "
              class="answer_panel"
            >
              <input
                v-model="
                  applyingAnswerStore.applyingAnswer[judge.receipt_judge_number]
                    .vector
                "
                class="answer_vector"
                type="text"
                @change="writeAnswerVector(judge.receipt_judge_number, $event)"
              />
              <input
                v-model="
                  applyingAnswerStore.applyingAnswer[judge.receipt_judge_number]
                    .answer
                "
                class="answer_text"
                type="text"
                @change="writeAnswer(judge.receipt_judge_number, $event)"
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from "vue";
import { Judge } from "~/interfaces/judge";
import { useApplyingAnswerStore } from "~/store/applyingAnswer";
import { applyingAnswer, applyingVector } from "~/api/applying";
import { ApplyingAnswer } from "~/interfaces/applying";

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
  applyingAnswers: {
    type: Object as PropType<ApplyingAnswer[]>,
    required: true,
  },
});
const applyingAnswerStore = useApplyingAnswerStore();

async function writeAnswer(key: number, event: any) {
  await applyingAnswer({
    receipt_judge_number: key,
    applying_answer: event.target.value,
  });
}

async function writeAnswerVector(key: number, event: any) {
  await applyingVector({
    receipt_judge_number: key,
    applying_answer_vector: event.target.value,
  });
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/applying/judges/style.scss";
</style>
