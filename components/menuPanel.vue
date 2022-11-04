<template>
  <div class="menu_panel">
    <p class="menu_panel_title">{{ menuItem.title }}</p>
    <template v-for="(i, n) in menuItem.contents" :key="n">
      <NuxtLink
        :to="{ query: { type: i.query } }"
        :class="{ active: i.query === $route.query.type }"
      >
        {{ i.content }}
      </NuxtLink>
    </template>
  </div>
</template>

<script>
import menuItems from "~~/assets/datas/menuItems.ts";

export default {
  data() {
    const menuItem = menuItems[this.$route.name];
    return {
      menuItem,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/menuPanel/style.scss";
</style>
