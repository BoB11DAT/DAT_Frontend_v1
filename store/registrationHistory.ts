import { defineStore } from "pinia";
import { ReceiptRegistration } from "~/assets/interfaces/receipt";

export const useRegistrationHistoryStore = defineStore("registrationHistory", {
  state: () => ({
    registrationHistory: null as ReceiptRegistration[],
  }),
  getters: {
    getRegistrationHistory: (state) => state.registrationHistory,
  },
  actions: {
    setRegistrationHistory(registrationHistory: ReceiptRegistration[]) {
      this.registrationHistory = registrationHistory;
    },
  },
});
