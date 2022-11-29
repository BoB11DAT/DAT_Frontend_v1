import { getAPI } from "./getAPI";

export const getRound = async (number: string) => {
  try {
    const { data } = await getAPI("/receipt/round", {
      method: "POST",
      data: {
        receipt_registration_number: number,
      },
    });
    return data;
  } catch (e) {
    return null;
  }
};
