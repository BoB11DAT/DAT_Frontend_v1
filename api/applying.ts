import { getAPI } from "~/composables/getAPI";
import { ApplyingAnswerParam } from "~~/assets/interfaces/applying";

export async function applyingAnswer(params: ApplyingAnswerParam) {
  const { data } = await getAPI("/applying/answer", {
    method: "POST",
    data: params,
  });
  return data as any;
}

export async function applyingVector(params: ApplyingAnswerParam) {
  const { data } = await getAPI("/applying/answer/vector", {
    method: "POST",
    data: params,
  });
  return data as any;
}

export async function applyingEnd() {
  const { data } = await getAPI("/applying/end");
  return data as any;
}
