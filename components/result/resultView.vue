<template>
  <div class="result_view">
    <h1 class="title">결과 조회</h1>
    <div class="result_panel">
      <table>
        <th>응시 회차</th>
        <th>수험번호</th>
        <th>응시여부</th>
        <th>결과조회</th>
      </table>
      <table>
        <tr v-for="(result, n) in props.results" :key="n">
          <td>{{ result.receipt_round }}</td>
          <td>{{ result.receipt_registration_number }}</td>
          <td>O</td>
          <td>
            <a
              :href="result.result_report"
              target="_blank"
              :class="{ disabled: !result.result_report }"
              >결과 조회
            </a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Result } from "~/interfaces/result";

const props = defineProps({
  results: {
    type: Object as PropType<Result[]>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/result/result/style.scss";
</style>
