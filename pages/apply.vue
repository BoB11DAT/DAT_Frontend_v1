<template>
  <div class="apply">
    <applyView v-if="currentMenu === 'apply'" :apply-orders="applyOrders" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCurrentMenuStore } from "~/store/currentMenu";

const applyOrders = [
  {
    time: "2022.09.08 ~ 2022.10.04",
    round: "P01-2022-1",
  },
  {
    time: "2022.09.08 ~ 2022.10.04",
    round: "P01-2022-2",
  },
  {
    time: "2022.09.08 ~ 2022.10.04",
    round: "P01-2022-김성빈",
  },
];
const store = useCurrentMenuStore();
const currentMenu = computed(() => {
  return store.getCurrentMenu;
});
// eslint-disable-next-line no-undef
definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss">
@import "~/assets/styles/pages/apply/style.scss";
</style>
