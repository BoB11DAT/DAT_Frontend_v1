<template>
  <div class="objection_view">
    <div class="objection_title_panel">
      <h1 class="title">이의제기</h1>
      <button @click="emit('setCurrentObjection', 1)">이의신청</button>
    </div>
    <div class="objection_panel">
      <table>
        <th>번호</th>
        <th>제목</th>
        <th>등록일</th>
        <th>처리현황</th>
      </table>
      <table>
        <template v-for="(objection, n) in objections" :key="n">
          <tr
            @click="
              emit('setObjectionId', objection.objection_id),
                emit('setCurrentObjection', 2)
            "
          >
            <td>{{ n + 1 }}</td>
            <td>{{ objection.objection_title }}</td>
            <td>
              {{
                new Date(objection.objection_created_date).toLocaleDateString(
                  "ko-KR",
                )
              }}
            </td>
            <td>
              <p v-if="objection.objection_answered">답변완료</p>
              <p v-else>답변대기</p>
            </td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getObjections } from "~~/composables/mypage";
import { Objection } from "~~/interfaces/mypage";

const emit = defineEmits(["setCurrentObjection", "setObjectionId"]);
const objections = (await getObjections()) as Objection[];
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/mypage/objection/style.scss";
</style>
