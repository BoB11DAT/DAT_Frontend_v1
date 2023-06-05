<template>
  <div class="applying">
    <template v-if="popupView">
      <ApplyingPopupView
        @cancel-end-applying="cancelEndApplying"
        @end-applying="endApplyingforPopup"
      />
    </template>
    <div v-if="judges" class="applying_panel">
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
import { ref, Ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCookie } from "#app";
import vectorItems from "~/constants/vectorItems";
import { getJudges } from "~/composables/judges";
import { getApplyingAnswer } from "~/composables/applyingAnswer";
import { ApplyingAnswer } from "~/interfaces/applying";
import { useApplyingAnswerStore } from "~/store/applyingAnswer";
import { applyingEnd } from "~/api/applying";
import { getCategories } from "~/composables/categories";
import { JUDGEAMOUNT } from "~~/constants/judgeAmount";

// eslint-disable-next-line no-undef
const config = useRuntimeConfig();

const router = useRouter();
const categories = getCategories();
const applyingAnswerStore = useApplyingAnswerStore();
const notWrited = computed(() => {
  let count = 0;
  for (let i = 1; i <= JUDGEAMOUNT; i++) {
    if (
      applyingAnswerStore.getApplyingAnswer[i]?.answer &&
      applyingAnswerStore.getApplyingAnswer[i]?.vector
    ) {
      count++;
    }
  }
  return JUDGEAMOUNT - count;
});
const judges = await getJudges();
const applyingAnswers = await getApplyingAnswer();

let popupView = ref(false) as Ref<boolean>;

async function endApplying() {
  if (notWrited.value) {
    popupView.value = true;
    return;
  }
  await applyingEnd();
  alert("수고하셨습니다. 제출이 완료되었습니다.");
  router.push("result");
}

async function endApplyingforPopup() {
  await applyingEnd();
  alert("수고하셨습니다. 제출이 완료되었습니다.");
  router.push("result");
}

function cancelEndApplying() {
  popupView.value = false;
}

onMounted(async () => {
  applyingAnswers.map((answer: ApplyingAnswer) => {
    applyingAnswerStore.initKey(answer.receipt_judge_number);
    applyingAnswerStore.setApplyingAnswer(
      answer.receipt_judge_number,
      answer.applying_answer,
      "answer",
    );
    applyingAnswerStore.setApplyingAnswer(
      answer.receipt_judge_number,
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
