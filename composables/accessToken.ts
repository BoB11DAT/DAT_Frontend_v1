import { getAPI } from "./getAPI";

export const getAccessToken = async () => {
  try {
    const data = await getAPI("/auth/refresh");
    getAPI.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data.data.accessToken}`;
    return data;
  } catch (e) {
    return e;
  }
};
