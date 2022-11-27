<template>
  <header>
    <NuxtLink :to="{ path: '/' }" class="logo"
      ><img src="~/assets/img/logo.svg"
    /></NuxtLink>
    <template v-for="(i, n) in headerItems" :key="n">
      <NuxtLink :to="i.path" class="header_item">{{ i.content }}</NuxtLink>
    </template>
    <template v-if="refreshToken">
      <a class="my_page">마이 페이지</a>
      <a class="logout">로그아웃</a>
    </template>
    <template v-else>
      <NuxtLink :to="'login'" class="login">로그인</NuxtLink>
    </template>
  </header>
</template>

<script setup>
import { useCookie } from "#app";
import headerItems from "~/constants/headerItems";
import { useAuthStore } from "~/store/auth";

const store = useAuthStore();
const refreshToken = useCookie("refreshToken");
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/header/style.scss";
</style>
