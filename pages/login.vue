<template>
  <div class="login_panel">
    <h1>로그인</h1>
    <div class="logo">
      <img src="~/assets/imgs/logo.svg" />
      <p>DAT</p>
    </div>
    <form class="login_form" @submit.prevent="userLogin">
      <input v-model="loginDatas.user_id" type="text" placeholder="ID" />
      <input v-model="loginDatas.user_pw" type="password" placeholder="PW " />
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCookie } from "#app";
import { login } from "~/api/auth";

// eslint-disable-next-line no-undef
const config = useRuntimeConfig();

let loginDatas = ref({
  user_id: "",
  user_pw: "",
});

async function userLogin() {
  login(loginDatas.value).then((res) => {
    location.href = "/";
  });
}

// eslint-disable-next-line no-undef
definePageMeta({
  layout: "login-page",
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/login/style.scss";
</style>
