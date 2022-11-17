<template>
  <div class="receipt_view">
    <h1 class="title">평가 접수</h1>
    <div class="receipt_panel">
      <table>
        <th>접수 기간</th>
        <th>응시 회차</th>
        <th>평가 접수</th>
      </table>
      <table>
        <tr v-for="(i, n) in props.receiptOrders" :key="n">
          <td>
            {{ i.receipt_start_date.toString().substring(0, 10) }} ~
            {{ i.receipt_end_date.toString().substring(0, 10) }}
          </td>
          <td>{{ i.receipt_round }}</td>
          <td>
            <button @click="doReceiptRegistration(i.receipt_round)">
              접수
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { receiptRegistration } from "~/api/receipt";
import { Receipt } from "~/assets/interfaces/receipt";
import { useCurrentMenuStore } from "~/store/currentMenu";

const props = defineProps({
  receiptOrders: {
    type: Array as PropType<Receipt[]>,
    required: true,
  },
});
const store = useCurrentMenuStore();

function doReceiptRegistration(data: string) {
  receiptRegistration({ receipt_round: data });
  store.setCurrentMenu("history");
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/receipt/receipt/style.scss";
</style>
