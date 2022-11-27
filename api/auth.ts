import { getAPI } from "~/composables/getAPI";
import { RefreshToken } from "~/interfaces/auth";

export async function login(params: object): Promise<RefreshToken> {
  const { data } = await getAPI("/auth/login", {
    method: "POST",
    data: params,
  });
  return data as RefreshToken;
}
