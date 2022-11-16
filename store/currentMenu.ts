import { defineStore } from "pinia";

export const useCurrentMenuStore = defineStore("currentMenu", {
  state: () => ({
    currentMenu: null as string,
  }),
  getters: {
    getCurrentMenu: (state) => state.currentMenu,
  },
  actions: {
    setCurrentMenu(menu: string) {
      this.currentMenu = menu;
    },
  },
});
