<template>
  <div class="receipt">
    <ReceiptAnnouncementView
      v-if="currentMenu === 'announcement'"
      :announcement-orders="announcementOrders"
    />
    <ReceiptView
      v-else-if="currentMenu === 'receipt'"
      :receipt-orders="receiptOrders"
    />
    <ReceiptHistoryView v-else :history-orders="historyOrders" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCurrentMenuStore } from "~/store/currentMenu";

const announcementOrders = [
  "응시회차 확인",
  "인적사항 작성",
  "접수 확인",
  "본인 확인",
  "접수 완료",
];
const receiptOrders = [
  {
    time: "2022.09.01 ~ 2022.09.30",
    round: "P01-2022-1",
  },
  {
    time: "2022.09.01 ~ 2022.09.30",
    round: "P01-2022-2",
  },
  {
    time: "2022.09.01 ~ 2022.09.30",
    round: "P01-2022-김성빈",
  },
];
const historyOrders = [
  {
    time: "2022.09.08 ~ 2022.10.04",
    name: "김성빈",
    tell: "010-1234-5678",
    available: true,
  },
  {
    time: "2022.09.08 ~ 2022.10.04",
    name: "김성빈",
    tell: "010-1234-5678",
    available: true,
  },
  {
    time: "2022.09.08 ~ 2022.10.04",
    name: "김성빈",
    tell: "010-1234-5678",
    available: false,
  },
];
const store = useCurrentMenuStore();
const currentMenu = computed(() => {
  return store.getCurrentMenu;
});
</script>

<style lang="scss">
@import "~/assets/styles/pages/receipt/style.scss";
</style>
