<template>
  <div class="applying_view">
    <h1 class="title">평가 접수</h1>
    <div class="applying_panel">
      <table>
        <th>응시 가능 기간</th>
        <th>응시 회차</th>
        <th>평가 선택</th>
      </table>
      <table>
        <tr v-for="(i, n) in props.applyingOrders" :key="n">
          <td>{{ i.time }}</td>
          <td>{{ i.round }}</td>
          <td>
            <input
              v-model="selectedRound"
              type="radio"
              name="round"
              :value="n"
            />
          </td>
        </tr>
      </table>
      <hr />
      <template v-if="typeof selectedRound === 'number'">
        <div class="agreement_box">
          <input id="agreement" type="checkbox" />
          <label for="agreement"
            >응시하려는 회차는 [{{
              props.applyingOrders[selectedRound].round
            }}]이며, 응시가능기간은 [{{
              props.applyingOrders[selectedRound].time
            }}]임을 확인했습니다.
          </label>
        </div>
      </template>
      <button class="applying_button">응시하기</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  applyingOrders: {
    type: Array,
    required: true,
  },
});

let selectedRound = ref(0);
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/applying/applying/style.scss";
</style>
