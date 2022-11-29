<template>
  <div class="solution_view">
    <h1 class="title">문항 풀이</h1>
    <div class="button_panel">
      <div>
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
      <select v-model="registrationNumber">
        <option
          v-for="(result, n) in props.results"
          :key="n"
          :value="result.receipt_registration_number"
        >
          {{ result.receipt_registration_number }}
        </option>
      </select>
    </div>
    <hr />
    <div class="judge_panel">
      <template v-for="(i, n) in props.categories" :key="n">
        <h1 class="category">{{ i }}</h1>
        <template v-for="(judge, o) in props.resultJudges" :key="o">
          <template
            v-if="
              judge.judge_category === n * 1 &&
              (!judgeSelector ||
                (judgeSelector - 1 === 0 && judge.result_answer_correct) ||
                (judgeSelector - 1 === 1 && !judge.result_answer_correct))
            "
          >
            <div class="judge_box">
              <div class="contents_panel">
                <p>
                  Q{{ judge.receipt_judge_number.toString().padStart(2, "0") }}.
                  {{ judge.judge_content }}
                </p>
                <div class="url_panel">
                  <a :href="judge.docdoc_url" class="docdoc" target="_blank"
                    >DocDoc</a
                  >
                  <button class="submit" @click="check(judge.judge_id)">
                    제출
                  </button>
                </div>
              </div>
              <input :id="judge.judge_id.toString()" />
            </div>
          </template>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, Ref, watch, onMounted } from "vue";
import { Result, Solution } from "~/interfaces/result";
import { checkAnswer } from "~/api/result";

const props = defineProps({
  categories: {
    type: Object as PropType<Object>,
    required: true,
  },
  results: {
    type: Object as PropType<Result[]>,
    required: true,
  },
  resultJudges: {
    type: Array as PropType<Solution[]>,
    required: true,
  },
});
const emit = defineEmits(["setRegistrationNumber"]);
const buttons = ["전체 문항", "정답 문항", "틀린 문항"];

let judgeSelector = ref(0);
let registrationNumber = ref("") as Ref<string>;

watch(registrationNumber, (value) => {
  emit("setRegistrationNumber", value);
});

async function check(judgeId: number) {
  const answer = document.getElementById(
    judgeId.toString(),
  ) as HTMLInputElement;
  const correct = await checkAnswer(judgeId, answer.value);
  if (correct) {
    alert("정답입니다.");
  } else {
    alert("오답입니다.");
  }
}

onMounted(() => {
  registrationNumber.value = props.results[0].receipt_registration_number;
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/result/solution/style.scss";
</style>
