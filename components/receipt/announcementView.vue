<template>
  <div class="announcement_view">
    <h1 class="title">평가 접수 안내</h1>
    <div class="announcement_panel">
      <div class="announcement_order">
        <template v-for="(i, n) in props.announcementOrders" :key="n">
          <div>
            <p class="order_number">{{ n + 1 }}</p>
            <p class="order_text">{{ i }}</p>
          </div>
          <img
            v-if="n !== props.announcementOrders.length - 1"
            src="~/assets/img/receipt_arrow.svg"
          />
        </template>
      </div>
      <ol class="announcement_text">
        <li>
          접수절차
          <ol>
            <li>응시회차 확인</li>
            <li>인적사항 작성</li>
            <li>접수 확인</li>
            <li>본인 확인</li>
            <li>접수완료</li>
          </ol>
        </li>
        <br />
        <li>
          주의사항
          <ol>
            <li>
              접수 취소는 해당 회차의 접수 날로부터 3일 이내에 신청할 수 있으며,
              접수 날로부터 3일이 지나거나 접수 이후 평가 응시를 시작한 경우
              접수 취소가 불가능합니다.
            </li>
            <li>
              평가접수를 위해서는 DAT 홈페이지 회원가입 후 본인인증이 되어
              있어야 합니다.
            </li>
          </ol>
        </li>
      </ol>
      <button @click="store.setCurrentMenu('receipt')">평가 접수</button>
    </div>
  </div>
</template>

<script setup>
import { useCurrentMenuStore } from "~/store/currentMenu";

const store = useCurrentMenuStore();
const props = defineProps({
  announcementOrders: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/receipt/announcementView/style.scss";
</style>
