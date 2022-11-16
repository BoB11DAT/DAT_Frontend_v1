<template>
  <div>
    <div class="banner">
      <div class="banner_text">
        <h1>WELCOME TO</h1>
        <h1>DAT</h1>
      </div>
      <div class="banner_trapezoid"></div>
    </div>
    <div class="menus">
      <indexPageCard v-for="(i, n) in indexItems" :key="n" :menu="i" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import indexItems from "~~/assets/datas/indexItems.ts";

// eslint-disable-next-line no-undef
definePageMeta({
  layout: "index-page",
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/index/style.scss";
</style>
