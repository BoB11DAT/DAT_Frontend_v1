<template>
  <div class="history_view">
    <h1 class="title">평가 접수 내역</h1>
    <div class="history_panel">
      <table>
        <th>응시 가능 시간</th>
        <th>응시 회차</th>
        <th>수험번호</th>
        <th>응시여부</th>
        <th>평가응시</th>
        <th>평가취소</th>
      </table>
      <table>
        <tr v-for="(historyOrder, n) in props.historyOrders" :key="n">
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
          <td>{{ historyOrder.receipt_round }}</td>
          <td>{{ historyOrder.receipt_registration_number }}</td>
          <td v-if="checkEnd(historyOrder)">응시가능</td>
          <td v-else>응시불가</td>
          <td>
            <button
              v-if="
                historyOrder.receipt_registration_open && checkEnd(historyOrder)
              "
              @click="apply(historyOrder.receipt_registration_number)"
            >
              열기
            </button>
            <button
              v-else
              :class="{ disabled: !checkEnd(historyOrder) }"
              @click="router.push({ path: 'apply' })"
            >
              응시
            </button>
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
import { useRouter } from "vue-router";
import { useCookie } from "#app";
import { ReceiptRegistration } from "~/interfaces/receipt";
import { ReceiptRegistrationCookie } from "~/interfaces/receipt";
import { continueApplying } from "~/api/receipt";

// eslint-disable-next-line no-undef
const config = useRuntimeConfig();
const props = defineProps({
  historyOrders: {
    type: Array as PropType<ReceiptRegistration[]>,
    required: true,
  },
});
const router = useRouter();

function checkEnd(historyOrder) {
  return (
    !historyOrder.receipt_registration_end ||
    historyOrder.receipt_available_end_date < new Date()
  );
}

async function apply(receipt_registration_number: string) {
  continueApplying({ receipt_registration_number }).then(
    (res: ReceiptRegistrationCookie) => {
      const cookie = useCookie("receiptRegistrationNumber", {
        domain: config.public.ServiceDomain,
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
      });
      cookie.value = res.receiptRegistrationNumber;
    },
  );
  window.open("/applying", "_blank");
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/receipt/history/style.scss";
</style>
