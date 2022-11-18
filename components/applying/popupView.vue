<template>
  <div class="popup_view">
    <div class="popup_panel">
      <div class="warning_text">
        <p>응답하지 않은 문항이 {{ notWrited }}개 존재합니다.</p>
        <p>미응답 문항은 오답으로 처리됩니다. 제출하시겠습니까?</p>
      </div>
      <div class="button_panel">
        <button class="cancel" @click="$emit('cancelEndApplying')">취소</button>
        <button class="confirm" @click="endApplying()">제출</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useApplyingAnswerStore } from "~/store/applyingAnswer";
import { applyingEnd } from "~/api/applying";

const emit = defineEmits(["cancelEndApplying"]);
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

async function endApplying() {
  await applyingEnd();
  window.close();
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/applying/popupView/style.scss";
</style>
