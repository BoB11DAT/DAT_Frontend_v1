import { getAPI } from "./getAPI";

export const getObjections = async () => {
  try {
    const { data } = await getAPI("/user/objection");
    return data;
  } catch (e) {
    return null;
  }
};

export const getObjectionDetail = async (id: number) => {
  try {
    const { data } = await getAPI(`/user/objection/${id}`);
    return data;
  } catch (e) {
    return null;
  }
};
