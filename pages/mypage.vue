<template>
  <div class="mypage">
    <MypageObjection
      v-if="currentMenu === 'objection' && currentObjecton === 0"
      @set-current-objection="setCurrentObjecton"
      @set-objection-id="setObjectionId"
    />
    <MypageCreateObjection
      v-else-if="currentMenu === 'objection' && currentObjecton === 1"
      :results="results"
      @set-current-objection="setCurrentObjecton"
    />
    <MypageObjectionDetail
      v-else-if="currentMenu === 'objection' && currentObjecton === 2"
      :objection-id="objectionId"
      @set-current-objection="setCurrentObjecton"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, Ref, onMounted, watch } from "vue";
import { useCurrentMenuStore } from "~/store/currentMenu";
import { getResults } from "~/composables/results";
import { Result, Solution } from "~/interfaces/result";

const currentMenuStore = useCurrentMenuStore();
const currentMenu = computed(() => {
  return currentMenuStore.getCurrentMenu as string;
});

let results = ref([]) as Ref<Result[]>;
let currentObjecton = ref(0) as Ref<number>;
let objectionId = ref() as Ref<number>;

function setCurrentObjecton(value: number) {
  currentObjecton.value = value;
}

function setObjectionId(value: number) {
  objectionId.value = value;
}

watch(currentMenu, async (value) => {
  setCurrentObjecton(0);
});

onMounted(async () => {
  results.value = await getResults();
});

// eslint-disable-next-line no-undef
definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/mypage/style.scss";
</style>
