<template>
  <div class="vector_list_panel">
    <p v-for="(vector, n) in props.vectors" :key="n">
      {{ `${n}. ` }}{{ vector }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
// eslint-disable-next-line no-undef
const props = defineProps({
  vectors: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/applying/vectorList/style.scss";
</style>
