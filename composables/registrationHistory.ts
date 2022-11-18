import { getAPI } from "./getAPI";

export const getRegistrationHistorys = async () => {
  try {
    const { data } = await getAPI("/receipt/registration");
    return data;
  } catch (e) {
    return e;
  }
};
