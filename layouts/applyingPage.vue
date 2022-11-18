<template>
  <div id="app">
    <applyingHeaderFile />
    <slot />
  </div>
</template>

<script>
export default {
  name: "applying-page",
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/layouts/applyingPage/style.scss";
</style>
