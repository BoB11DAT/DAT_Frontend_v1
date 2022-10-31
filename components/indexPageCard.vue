<template>
  <div class="menu_item">
    <img :src="props.menu.img" />
    <p>{{ props.menu.content }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/indexPageCard/style.scss";
</style>
