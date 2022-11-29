<template>
  <header>
    <NuxtLink :to="{ path: '/' }" class="logo"
      ><img src="~/assets/imgs/logo.svg"
    /></NuxtLink>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "~/assets/styles/components/header/style.scss";
@import "~/assets/styles/components/applyingHeader/style.scss";
</style>
