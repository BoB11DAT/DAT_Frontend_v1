<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <a class="logo"><img src="~/assets/img/logo.svg" /></a>
    <a v-for="(i, n) in headerItems" :key="n" class="header_item">{{ i }}</a>
    <a class="my_page">마이 페이지</a>
    <a class="logout">로그아웃</a>
  </header>
</template>

<script setup>
import headerItems from "~/assets/datas/headerItems.js";
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/header/style.scss";
</style>
