import { getAPI } from "./getAPI";

export const getJudges = async () => {
  try {
    const { data } = await getAPI("/applying");
    return data;
  } catch (e) {
    return e;
  }
};
