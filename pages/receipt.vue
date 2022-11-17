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
    <ReceiptHistoryView
      v-else-if="currentMenu === 'history'"
      :history-orders="historyOrders"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, Ref } from "vue";
import { useCurrentMenuStore } from "~/store/currentMenu";
import { getReceipts } from "~/composables/receipts";
import { getRegistrationHistorys } from "~/composables/registrationHistorys";
import { Receipt, ReceiptRegistration } from "~/assets/interfaces/receipt";

const announcementOrders = [
  "응시회차 확인",
  "인적사항 작성",
  "접수 확인",
  "본인 확인",
  "접수 완료",
];
const receiptOrders = ref([]) as Ref<Receipt[]>;
const historyOrders = ref({}) as Ref<ReceiptRegistration>;
const store = useCurrentMenuStore();
const currentMenu = computed(() => {
  return store.getCurrentMenu as string;
});

// eslint-disable-next-line no-undef
definePageMeta({
  middleware: ["auth"],
});

onMounted(async () => {
  receiptOrders.value = (await getReceipts()) as Receipt[];
  historyOrders.value =
    (await getRegistrationHistorys()) as ReceiptRegistration;
});
</script>

<style lang="scss">
@import "~/assets/styles/pages/receipt/style.scss";
</style>
