<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="userLogin">
      <input v-model="loginDatas.user_id" type="text" placeholder="Username" />
      <input
        v-model="loginDatas.user_pw"
        type="password"
        placeholder="Password"
      />
      <button type="submit" @click="userLogin()">Login</button>
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
  user_id: "guest",
  user_pw: "guest",
});

async function userLogin() {
  login(loginDatas.value).then((res) => {
    const cookie = useCookie("refreshToken", {
      domain: config.public.ServiceDomain,
      httpOnly: process.env.NODE_ENV === "production",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });
    console.log(res);
    cookie.value = res.refreshToken;
    location.href = "/";
  });
}
// eslint-disable-next-line no-undef
definePageMeta({
  auth: false,
});
</script>

<style></style>
