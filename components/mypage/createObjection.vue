<template>
  <div class="create_objection_view">
    <div class="create_objection_title_panel">
      <h1 class="title">이의제기</h1>
      <select v-model="registrationNumber">
        <option
          v-for="(result, n) in props.results"
          :key="n"
          :value="result.receipt_registration_number"
        >
          {{ result.receipt_registration_number }}
        </option>
      </select>
    </div>
    <div class="create_objection_panel">
      <div class="create_objection_panel_head">
        <div class="create_objection_title">
          <p>제목</p>
          <input v-model="objection.objection_title" />
        </div>
        <div class="create_objection_number">
          <p>번호</p>
          <input v-model="receiptJudgeNumber" />
        </div>
      </div>
      <p class="content_text">내용</p>
      <textarea
        v-model="objection.objection_content"
        class="content"
      ></textarea>
      <button @click="applyObjection">등록하기</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted, PropType, watch } from "vue";
import { Result } from "~/interfaces/result";
import { CreateObjection } from "~~/interfaces/mypage";
import { createObjection } from "~~/api/mypage";

const props = defineProps({
  results: {
    type: Object as PropType<Result[]>,
    required: true,
  },
});
const emit = defineEmits(["setCurrentObjection"]);

let registrationNumber = ref("") as Ref<string>;
let objection = ref({}) as Ref<CreateObjection>;
let receiptJudgeNumber = ref() as Ref<number>;

async function applyObjection() {
  await createObjection({
    ...objection.value,
    receipt_registration_number: registrationNumber.value,
    receipt_judge_number: receiptJudgeNumber.value,
  });
  emit("setCurrentObjection", 0);
}

onMounted(() => {
  registrationNumber.value = props.results[0].receipt_registration_number;
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/mypage/createObjection/style.scss";
</style>
