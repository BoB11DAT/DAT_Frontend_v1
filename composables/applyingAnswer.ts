import { getAPI } from "./getAPI";

export const getApplyingAnswer = async () => {
  try {
    const { data } = await getAPI("/applying/answer");
    return data;
  } catch (e) {
    return e;
  }
};
