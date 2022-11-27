import { getAPI } from "~/composables/getAPI";

export const checkAnswer = async (judge_id: number, answer: string) => {
  try {
    const { data } = await getAPI("/result/check/answer", {
      method: "POST",
      data: {
        judge_id: judge_id,
        answer: answer,
      },
    });
    return data;
  } catch (e) {
    return e;
  }
};
