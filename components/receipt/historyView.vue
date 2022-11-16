<template>
  <div class="history_view">
    <h1 class="title">평가 접수</h1>
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
        <tr v-for="(i, n) in props.historyOrders" :key="n">
          <td>{{ i.time }}</td>
          <td>{{ i.name }}</td>
          <td>{{ i.tell }}</td>
          <td v-if="i.available">응시가능</td>
          <td v-else>응시불가</td>
          <td>
            <button>응시</button>
          </td>
          <td>
            <button>취소</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  historyOrders: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/receipt/history/style.scss";
</style>
