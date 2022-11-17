<template>
  <div class="history_view">
    <h1 class="title">평가 접수 내역</h1>
    <div class="history_panel">
      <table>
        <th>응시 가능 시간</th>
        <th>이름</th>
        <th>전화번호</th>
        <th>응시여부</th>
        <th>평가응시</th>
        <th>평가취소</th>
      </table>
      <table>
        <tr v-for="(historyOrder, n) in store.registrationHistory" :key="n">
          <td>
            {{
              new Date(
                historyOrder.receipt_available_start_date,
              ).toLocaleDateString()
            }}
            ~
            {{
              new Date(
                historyOrder.receipt_available_end_date,
              ).toLocaleDateString()
            }}
          </td>
          <td>{{ userData.user_name }}</td>
          <td>{{ userData.user_tell }}</td>
          <td v-if="checkEnd(historyOrder)">응시가능</td>
          <td v-else>응시불가</td>
          <td>
            <button :class="{ disabled: !checkEnd(historyOrder) }">응시</button>
          </td>
          <td>
            <button
              :class="{
                disabled:
                  !checkEnd(historyOrder) ||
                  historyOrder.receipt_registration_open,
              }"
            >
              취소
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";
import { ReceiptRegistration } from "~/assets/interfaces/receipt";
import { useRegistrationHistoryStore } from "~/store/registrationHistory";
import { User } from "~/assets/interfaces/user";

const props = defineProps({
  userData: {
    type: Object as PropType<User>,
    required: true,
  },
});
const store = useRegistrationHistoryStore();
const registrationHistory = computed<ReceiptRegistration[]>(() => {
  return store.getRegistrationHistory;
});

function checkEnd(historyOrder) {
  return (
    !historyOrder.receipt_registration_end ||
    historyOrder.receipt_available_end_date < new Date()
  );
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/receipt/history/style.scss";
</style>
