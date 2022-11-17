<template>
  <header>
    <NuxtLink :to="{ path: '/' }" class="logo"
      ><img src="~/assets/img/logo.svg"
    /></NuxtLink>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "~/assets/styles/components/header/style.scss";
</style>
