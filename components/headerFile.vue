<template>
  <header>
    <NuxtLink :to="{ path: '/' }" class="logo"
      ><img src="~/assets/img/logo.svg"
    /></NuxtLink>
    <template v-for="(i, n) in headerItems" :key="n">
      <NuxtLink :to="i.path" class="header_item">{{ i.content }}</NuxtLink>
    </template>
    <template v-if="store.accessToken">
      <a class="my_page">마이 페이지</a>
      <a class="logout">로그아웃</a>
    </template>
    <template v-else>
      <a class="login">로그인</a>
    </template>
  </header>
</template>

<script setup>
import headerItems from "~/assets/datas/headerItems";
import { useAuthStore } from "~/store/auth";

const store = useAuthStore();
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/header/style.scss";
</style>
