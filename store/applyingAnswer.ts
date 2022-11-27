import { defineStore } from "pinia";
import { ApplyingAnswerParam } from "~/interfaces/applying";

export const useApplyingAnswerStore = defineStore("applyingAnswer", {
  state: () => ({
    applyingAnswer: {} as ApplyingAnswerParam,
  }),
  getters: {
    getApplyingAnswer: (state) => state.applyingAnswer,
  },
  actions: {
    setApplyingAnswer(key: number, value: string | number, kind: string) {
      this.applyingAnswer[key][kind] = value;
    },
    initKey(key: number) {
      this.applyingAnswer[key] = {
        vector: null as number,
        answer: null as string,
      };
    },
  },
});
