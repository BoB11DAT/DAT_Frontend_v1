<template>
  <div class="popup_view">
    <div class="popup_panel">
      <div class="warning_text">
        <p>응답하지 않은 문항이 {{ notWrited }}개 존재합니다.</p>
        <p>미응답 문항은 오답으로 처리됩니다. 제출하시겠습니까?</p>
      </div>
      <div class="button_panel">
        <button class="cancel" @click="$emit('cancelEndApplying')">취소</button>
        <button class="confirm" @click="$emit('endApplying')">제출</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useApplyingAnswerStore } from "~/store/applyingAnswer";
import { JUDGEAMOUNT } from "~/constants/judgeAmount";

const router = useRouter();
const emit = defineEmits(["cancelEndApplying", "endApplying"]);
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
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/applying/popupView/style.scss";
</style>
