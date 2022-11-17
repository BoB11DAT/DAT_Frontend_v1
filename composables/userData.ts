import { getAPI } from "./getAPI";

export const getUserData = async () => {
  try {
    const { data } = await getAPI("/user");
    return data;
  } catch (e) {
    return e;
  }
};
