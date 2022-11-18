<template>
  <div class="applying">
    <template v-if="popupView">
      <ApplyingPopupView @cancel-end-applying="cancelEndApplying" />
    </template>
    <div class="applying_panel">
      <ApplyingVectorList :vectors="vectorItems" />
      <ApplyingJudges
        :judges="judges"
        :categories="categories"
        :applying-answers="applyingAnswers"
      />
      <ApplyingAnswerStatus
        :judges="judges"
        :categories="categories"
        @end-applying="endApplying"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref, computed } from "vue";
import vectorItems from "~/assets/datas/vectorItems";
import { getJudges } from "~/composables/judges";
import { getApplyingAnswer } from "~/composables/applyingAnswer";
import { Judge } from "~/assets/interfaces/judge";
import { ApplyingAnswer } from "~/assets/interfaces/applying";
import { useApplyingAnswerStore } from "~/store/applyingAnswer";
import { applyingEnd } from "~/api/applying";
import { getCategories } from "~~/composables/categories";

const categories = getCategories();
const applyingAnswerStore = useApplyingAnswerStore();
const notWrited = computed(() => {
  let count = 0;
  for (let i = 1; i <= 70; i++) {
    if (
      applyingAnswerStore.getApplyingAnswer[i]?.answer &&
      applyingAnswerStore.getApplyingAnswer[i]?.vector
    ) {
      count++;
    }
  }
  return 70 - count;
});

let judges = ref([]) as Ref<Judge[]>;
let applyingAnswers = ref([]) as Ref<ApplyingAnswer[]>;
let popupView = ref(false) as Ref<boolean>;

async function endApplying() {
  if (notWrited.value) {
    popupView.value = true;
    return;
  }
  await applyingEnd();
  window.close();
}

function cancelEndApplying() {
  popupView.value = false;
}

onMounted(async () => {
  judges.value = await getJudges();
  applyingAnswers.value = await getApplyingAnswer();
  applyingAnswers.value.map((answer) => {
    applyingAnswerStore.initKey(answer.applying_judge_number);
    applyingAnswerStore.setApplyingAnswer(
      answer.applying_judge_number,
      answer.applying_answer,
      "answer",
    );
    applyingAnswerStore.setApplyingAnswer(
      answer.applying_judge_number,
      answer.applying_answer_vector,
      "vector",
    );
  });
});

// eslint-disable-next-line no-undef
definePageMeta({
  layout: "applying-page",
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/applying/style.scss";
</style>
