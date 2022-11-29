<template>
  <header>
    <NuxtLink :to="{ path: '/' }" class="logo"
      ><img src="~/assets/imgs/logo.svg"
    /></NuxtLink>
    <template v-for="(i, n) in headerItems" :key="n">
      <NuxtLink :to="i.path" class="header_item">{{ i.content }}</NuxtLink>
    </template>
    <template v-if="refreshToken">
      <a class="my_page">마이 페이지</a>
      <button class="logout" @click="logoutAction()">로그아웃</button>
    </template>
    <template v-else>
      <NuxtLink :to="'login'" class="login">로그인</NuxtLink>
      <NuxtLink :to="'register'" class="register">회원가입</NuxtLink>
    </template>
  </header>
</template>

<script setup>
import { useCookie } from "#app";
import { useRouter } from "vue-router";
import headerItems from "~/constants/headerItems";
import { useAuthStore } from "~/store/auth";
import { logout } from "~/api/auth";

const store = useAuthStore();
const refreshToken = useCookie("refreshToken");
const router = useRouter();

function logoutAction() {
  logout();
  store.setAccessToken("");
  refreshToken.value = null;
  router.push("/");
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/header/style.scss";
</style>
