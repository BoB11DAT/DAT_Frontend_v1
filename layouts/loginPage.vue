<template>
  <div id="app">
    <headerFile />
    <div class="main">
      <div class="panel">
        <slot />
      </div>
    </div>
    <footerFile />
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/layouts/loginPage/style.scss";
</style>
