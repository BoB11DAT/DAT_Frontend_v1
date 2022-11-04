<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <NuxtLink :to="{ path: '/' }" class="logo"
      ><img src="~/assets/img/logo.svg"
    /></NuxtLink>
    <template v-for="(i, n) in headerItems" :key="n">
      <NuxtLink :to="i.path" class="header_item">{{ i.content }}</NuxtLink>
    </template>
    <a class="my_page">마이 페이지</a>
    <a class="logout">로그아웃</a>
  </header>
</template>

<script setup>
import headerItems from "~~/assets/datas/headerItems.ts";
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/header/style.scss";
</style>
