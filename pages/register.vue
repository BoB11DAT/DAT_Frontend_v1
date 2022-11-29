<template>
  <div class="register_panel">
    <h1>회원가입</h1>
    <div class="logo">
      <img src="~/assets/imgs/logo.svg" />
      <p>DAT</p>
    </div>
    <form class="register_form" @submit.prevent="userRegister">
      <input v-model="registerDatas.user_id" type="text" placeholder="ID" />
      <input
        v-model="registerDatas.user_pw"
        type="password"
        placeholder="PW "
      />
      <input v-model="registerDatas.user_name" type="text" placeholder="이름" />
      <input
        v-model="registerDatas.user_email"
        type="email"
        placeholder="이메일"
      />
      <input
        v-model="registerDatas.user_tell"
        type="text"
        placeholder="전화번호"
      />
      <input v-model="registerDatas.user_birth" type="date" />
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCookie } from "#app";
import { register } from "~/api/auth";

// eslint-disable-next-line no-undef
const config = useRuntimeConfig();

let registerDatas = ref({
  user_id: "",
  user_pw: "",
  user_name: "",
  user_email: "",
  user_tell: "",
  user_birth: Date,
});

function userRegister() {
  register(registerDatas.value);
  location.href = "login";
}

// eslint-disable-next-line no-undef
definePageMeta({
  layout: "login-page",
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/register/style.scss";
</style>
