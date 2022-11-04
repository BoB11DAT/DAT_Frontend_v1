<template>
  <div id="app">
    <headerFile />
    <div class="main">
      <menuPanel />
      <div class="panel">
        <slot />
      </div>
    </div>
    <footerFile />
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/layouts/default/style.scss";
</style>
