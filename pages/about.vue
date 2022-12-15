<template>
  <div class="about">
    <h1 class="title">About DAT</h1>
    <hr />
    <h2>
      DAT(DigitalForensic Ability Test)는 디지털 포렌식 역량평가 플랫폼입니다.
    </h2>
    <p>
      DAT는 디지털 포렌식 분야에서 역량 평가 방안과 피드백이 부족하다는 점에서
      시작되었습니다. 온라인에는 유용한 역량 강화를 위한 리소스가 많이 있지만
      분산되어 있으며, 개인이 상시적으로 역량을 점검하고 발전해 나갈 수 있는
      공간이 부족하다고 생각되었습니다. 따라서, 본 플랫폼은 세 가지의 목표를
      가지고 디지털 포렌식 산업 발전에 도움이 되는 플랫폼으로 성장하고자 합니다.
    </p>
    <h3>역량평가 시스템</h3>
    <p>- 공신력이 확보된 국내 디지털 포렌식 역량 평가 시스템 체계 구축</p>
    <h3>역량평가 결과 제공</h3>
    <p>
      - 개인이 정기적으로 플랫폼을 이용해 스스로 역량을 체크하고 역량 평가
      결과를 확인
    </p>
    <h3>학습 & 피드백 공간</h3>
    <p>- 틀렸던 문항도 학습 가능한 피드백 공간인 DocDoc 제공</p>
    <img src="~/assets/imgs/logo.svg" />
    <p>Team Datg.</p>
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
definePageMeta({
  middleware: ["default"],
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/about/style.scss";
</style>
