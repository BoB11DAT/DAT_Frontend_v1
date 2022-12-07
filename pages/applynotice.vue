<template>
  <div v-if="notice === 0" class="notice_view">
    <h1>안녕하세요. 곧 평가를 시작하겠습니다.</h1>
    <div class="description">
      <p>
        평가를 시작하기에 앞서 아래에 제공된 압축 파일을 클릭하여
        다운받아주세요.
      </p>
      <p>다운로드가 완료되었으면, 압축 해제 후 정상 파일 여부를 확인하세요.</p>
    </div>
    <div class="download_panel">
      <a
        href="https://ajouackr-my.sharepoint.com/:u:/g/personal/tobecert_ajou_ac_kr/ESXPEpXf8WJOu8lbaI4fJ70BBXTPPyEFoaPFjEKmPoYCqw?e=MidePf"
        target="_blank"
        >P01-2022-02</a
      >
      <p>MD5: 75c382e4ab19689642f8e354e368c9d2</p>
      <p>SHA1: 74c44211d5c1afdd9059d660b3f54edc92a450ed</p>
    </div>
    <button class="next" @click="notice += 1">다음 페이지</button>
  </div>
  <div v-else-if="notice === 1" class="notice_answer">
    <img
      src="https://cdn.discordapp.com/attachments/932980211098730537/1047195639018176642/image.png"
    />
    <div class="button_panel">
      <button class="before" @click="notice -= 1">이전 페이지</button>
      <button class="next" @click="apply()">응시 시작</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";

const notice = ref(0) as Ref<number>;

function apply() {
  window.open("/applying", "_blank");
  window.close();
}
// eslint-disable-next-line no-undef
definePageMeta({
  layout: "applying-page",
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/applynotice/style.scss";
</style>
