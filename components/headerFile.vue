<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <a class="logo"><img src="~/assets/img/logo.svg" /></a>
    <a v-for="(i, n) in headerItems" :key="n">{{ i }}</a>
  </header>
</template>

<script setup>
import headerItems from "~/assets/datas/headerItems.js";
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/header/style.scss";
</style>
