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
          <td>{{ i.time }}</td>
          <td>{{ i.round }}</td>
          <td>
            <button>접수</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  receiptOrders: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/receipt/receipt/style.scss";
</style>
