<template>
  <div class="menu_panel">
    <p class="menu_panel_title">{{ menuItem?.title }}</p>
    <template v-for="(i, n) in menuItem?.contents" :key="n">
      <a
        :class="{ active: i.param === currentMenu }"
        @click="store.setCurrentMenu(i.param)"
      >
        {{ i.content }}
      </a>
    </template>
  </div>
</template>

<script setup>
import { onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useCurrentMenuStore } from "~/store/currentMenu";
import menuItems from "~/assets/datas/menuItems";

const store = useCurrentMenuStore();
const route = useRoute();
const menuItem = computed(() => {
  return menuItems[route.name];
});
const currentMenu = computed(() => {
  return store.getCurrentMenu;
});

onMounted(() => {
  store.setCurrentMenu(menuItem.value?.contents[0].param);
});
watch(
  () => route.name,
  () => {
    store.setCurrentMenu(menuItem.value?.contents[0].param);
  },
);
// eslint-disable-next-line vue/return-in-computed-property
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/menuPanel/style.scss";
</style>
