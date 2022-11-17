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
      :user-data="userData"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, Ref } from "vue";
import { useCurrentMenuStore } from "~/store/currentMenu";
import { useRegistrationHistoryStore } from "~/store/registrationHistory";
import { getReceipts } from "~/composables/receipts";
import { Receipt, ReceiptRegistration } from "~/assets/interfaces/receipt";
import { getRegistrationHistorys } from "~/api/receipt";
import { getUserData } from "~/composables/userData";
import { User } from "~/assets/interfaces/user";

const announcementOrders = [
  "응시회차 확인",
  "인적사항 작성",
  "접수 확인",
  "본인 확인",
  "접수 완료",
];
const receiptOrders = ref([]) as Ref<Receipt[]>;
const historyOrders = ref({}) as Ref<ReceiptRegistration[]>;
const currentMenuStore = useCurrentMenuStore();
const registrationHistoryStore = useRegistrationHistoryStore();
const currentMenu = computed(() => {
  return currentMenuStore.getCurrentMenu as string;
});
const userData = ref({}) as Ref<User>;

// eslint-disable-next-line no-undef
definePageMeta({
  middleware: ["auth"],
});

onMounted(async () => {
  receiptOrders.value = (await getReceipts()) as Receipt[];
  await getRegistrationHistorys();
  userData.value = await getUserData();
});
</script>

<style lang="scss">
@import "~/assets/styles/pages/receipt/style.scss";
</style>
