<template>
  <div class="result">
    <ResultSolutionView
      v-if="currentMenu === 'solution'"
      :categories="categories"
      :result-judges="resultJudges"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useCurrentMenuStore } from "~/store/currentMenu";
import { getCategories } from "~/composables/categories";
import { getResultJudges } from "~/composables/resultJudges";

const currentMenuStore = useCurrentMenuStore();
const currentMenu = computed(() => {
  return currentMenuStore.getCurrentMenu;
});
const categories = getCategories();
const resultJudges = getResultJudges();

// eslint-disable-next-line no-undef
definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/result/style.scss";
</style>
