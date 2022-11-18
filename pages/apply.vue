<template>
  <div class="apply">
    <applyView
      v-if="currentMenu === 'apply'"
      :registration-historys="historyOrders"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, Ref } from "vue";
import { useCurrentMenuStore } from "~/store/currentMenu";
import { getReceiptRegistrationExceptOpened } from "~/composables/registrationHistoryWithRound";
import { ReceiptRegistration } from "~/assets/interfaces/receipt";

const currentMenuStore = useCurrentMenuStore();
const currentMenu = computed(() => {
  return currentMenuStore.getCurrentMenu;
});
const historyOrders = ref({}) as Ref<ReceiptRegistration[]>;

onMounted(async () => {
  historyOrders.value =
    (await getReceiptRegistrationExceptOpened()) as ReceiptRegistration[];
});

// eslint-disable-next-line no-undef
definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss">
@import "~/assets/styles/pages/apply/style.scss";
</style>
