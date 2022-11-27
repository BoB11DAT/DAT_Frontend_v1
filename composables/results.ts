import { getAPI } from "./getAPI";

export const getResults = async () => {
  try {
    const { data } = await getAPI("/result");
    return data;
  } catch (e) {
    return e;
  }
};

export const getResultJudges = async (number: string) => {
  try {
    const { data } = await getAPI("/result", {
      method: "POST",
      data: {
        receipt_registration_number: number,
      },
    });
    return data;
  } catch (e) {
    return e;
  }
};
