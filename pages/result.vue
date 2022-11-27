<template>
  <div class="result">
    <ResultView v-if="currentMenu === 'result'" :results="results" />
    <ResultSolutionView
      v-if="currentMenu === 'solution'"
      :categories="categories"
      :results="results"
      :result-judges="resultJudges"
      @set-registration-number="setRegistrationNumber"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, Ref, watch } from "vue";
import { useCurrentMenuStore } from "~/store/currentMenu";
import { getCategories } from "~/composables/categories";
import { getResults, getResultJudges } from "~/composables/results";
import { Result, Solution } from "~/interfaces/result";

const currentMenuStore = useCurrentMenuStore();
const currentMenu = computed(() => {
  return currentMenuStore.getCurrentMenu;
});
const categories = getCategories();

let results = ref([]) as Ref<Result[]>;
let resultJudges = ref([]) as Ref<Solution[]>;
let registrationNumber = ref("") as Ref<string>;

function setRegistrationNumber(number: string) {
  registrationNumber.value = number;
}

watch(registrationNumber, async (value) => {
  resultJudges.value = await getResultJudges(value);
});

onMounted(async () => {
  results.value = await getResults();
  setRegistrationNumber(results.value[0].receipt_registration_number);
});

// eslint-disable-next-line no-undef
definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/result/style.scss";
</style>
