<template>
  <div class="solution_view">
    <h1 class="title">문항 풀이</h1>
    <div class="button_panel">
      <template v-for="(i, n) in buttons" :key="n">
        <input
          :id="`${n}`"
          v-model="judgeSelector"
          type="radio"
          name="judge"
          :value="n"
        />
        <label class="judge_selector" :for="`${n}`">{{ i }}</label>
      </template>
    </div>
    <hr />
    <div class="judge_panel">
      <template v-for="(i, n) in props.categories" :key="n">
        <h1 class="category">{{ i }}</h1>
        <template v-for="(judge, o) in props.resultJudges" :key="o">
          <template
            v-if="
              judge.category === n * 1 &&
              (!judgeSelector || judgeSelector - 1 === judge.currect)
            "
          >
            <div class="judge_box">
              <div class="contents_panel">
                <p>
                  Q{{ judge.number.toString().padStart(2, "0") }}.
                  {{ judge.content }}
                </p>
                <div class="url_panel">
                  <a :href="judge.url" class="docdoc" target="_blank">DocDoc</a>
                  <a href="javascript:alert('정답입니다.')" class="submit"
                    >제출</a
                  >
                </div>
              </div>
              <input />
            </div>
          </template>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from "vue";

interface ResultJudge {
  number: number;
  content: string;
  category: number;
  url: string;
  currect: number;
}

const props = defineProps({
  categories: {
    type: Object as PropType<Object>,
    required: true,
  },
  resultJudges: {
    type: Array as PropType<ResultJudge[]>,
    required: true,
  },
});
const buttons = ["전체 문항", "정답 문항", "틀린 문항"];

let judgeSelector = ref(0);
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/result/solution/style.scss";
</style>
