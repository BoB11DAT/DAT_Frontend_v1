<template>
  <div class="objection_detail_view">
    <h1 class="title">이의제기</h1>
    <div class="objection_detail_title_panel">
      <h1>{{ objectionDetail.objection_title }}</h1>
      <p>
        {{
          new Date(objectionDetail.objection_created_date).toLocaleDateString(
            "ko-KR",
          )
        }}
      </p>
    </div>
    <div class="objection_detail_panel">
      <div class="objection_detail_content">
        <div>
          <h1>문의내용</h1>
          <div>
            <p>{{ objectionDetail.receipt_registration_number }}</p>
            <p>{{ objectionDetail.receipt_judge_number }}번</p>
          </div>
        </div>
        <p class="content">{{ objectionDetail.objection_content }}</p>
      </div>
      <div class="objection_detail_answer">
        <h1>답변</h1>
        <p class="content">{{ objectionDetail.objection_answer }}</p>
      </div>
      <button @click="emit('setCurrentObjection', 0)">목록으로</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getObjectionDetail } from "~~/composables/mypage";
import { ObjectionDetail } from "~~/interfaces/mypage";

const props = defineProps<{
  objectionId: number;
}>();
const emit = defineEmits(["setCurrentObjection"]);
const objectionDetail = (await getObjectionDetail(
  props.objectionId,
)) as ObjectionDetail;
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/mypage/objectionDetail/style.scss";
</style>
