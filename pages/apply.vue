<template>
  <div class="apply">
    <applyView v-if="currentMenu === 'apply'" />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useCurrentMenuStore } from "~/store/currentMenu";
import { useRegistrationHistoryStore } from "~/store/registrationHistory";
import { getRegistrationHistorys } from "~/api/receipt";

const registrationHistoryStore = useRegistrationHistoryStore();

const currentMenuStore = useCurrentMenuStore();
const currentMenu = computed(() => {
  return currentMenuStore.getCurrentMenu;
});

onMounted(async () => {
  await getRegistrationHistorys();
});

// eslint-disable-next-line no-undef
definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss">
@import "~/assets/styles/pages/apply/style.scss";
</style>
