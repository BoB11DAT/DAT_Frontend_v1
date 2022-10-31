<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <headerFile />
  <div class="banner">
    <div class="banner_text">
      <h1>WELCOME TO</h1>
      <h1>DAT</h1>
    </div>
    <div class="banner_trapezoid"></div>
  </div>
  <div class="menus">
    <indexPageCard v-for="(i, n) in menuItems" :key="n" :menu="i" />
  </div>
  <footerFile />
</template>

<script setup>
import { ref } from "vue";
import menuItems from "~/assets/datas/menuItems.js";
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/index/style.scss";
</style>
