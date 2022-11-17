<template>
  <div class="applying_view">
    <ApplyingVectorList :vectors="vectorItems" />
  </div>
</template>

<script lang="ts" setup>
import vectorItems from "~/assets/datas/vectorItems";

// eslint-disable-next-line no-undef
definePageMeta({
  layout: "applying-page",
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/applying/style.scss";
</style>
