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
        <tr v-for="(receiptOrder, n) in props.receiptOrders" :key="n">
          <td>
            {{ new Date(receiptOrder.receipt_start_date).toLocaleDateString() }}
            ~
            {{ new Date(receiptOrder.receipt_end_date).toLocaleDateString() }}
          </td>
          <td>{{ receiptOrder.receipt_round }}</td>
          <td>
            <button @click="doReceiptRegistration(receiptOrder.receipt_round)">
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
import { Receipt } from "~/interfaces/receipt";
import { useCurrentMenuStore } from "~/store/currentMenu";

const props = defineProps({
  receiptOrders: {
    type: Object as PropType<Receipt[]>,
    required: true,
  },
});
const emit = defineEmits(["getRegHist"]);
const store = useCurrentMenuStore();

async function doReceiptRegistration(data: string) {
  await receiptRegistration({ receipt_round: data });
  emit("getRegHist");
  store.setCurrentMenu("history");
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/receipt/receipt/style.scss";
</style>
