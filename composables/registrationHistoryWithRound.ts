import { getAPI } from "./getAPI";

export const getReceiptRegistrationExceptOpened = async () => {
  try {
    const { data } = await getAPI("/receipt/registration/except");
    return data;
  } catch (e) {
    return e;
  }
};
