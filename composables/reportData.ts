import { getAPI } from "./getAPI";

export const getReportData = async (number: string) => {
  try {
    const { data } = await getAPI("/report", {
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
