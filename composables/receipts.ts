import { getAPI } from "./getAPI";

export const getReceipts = async () => {
  try {
    const { data } = await getAPI("/receipt");
    return data;
  } catch (e) {
    return e;
  }
};
