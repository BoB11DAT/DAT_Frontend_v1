<template>
  <div class="applying">
    <ApplyingView
      v-if="currentMenu === 'applying'"
      :applying-orders="applyingOrders"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCurrentMenuStore } from "~/store/currentMenu";

const applyingOrders = [
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
</script>

<style lang="scss">
@import "~/assets/styles/pages/applying/style.scss";
</style>
