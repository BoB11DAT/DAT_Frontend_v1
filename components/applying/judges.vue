<template>
  <div class="judges_panel">
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
// eslint-disable-next-line no-undef
const props = defineProps({
  judges: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/applying/judges/style.scss";
</style>
