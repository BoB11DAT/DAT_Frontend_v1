import { getAPI } from "~/composables/getAPI";
import { RefreshToken } from "~/interfaces/auth";

export async function login(params: object): Promise<RefreshToken> {
  const { data } = await getAPI("/auth/login", {
    method: "POST",
    data: params,
  });
  return data as RefreshToken;
}

export async function logout(): Promise<void> {
  await getAPI("/auth/logout");
}

export async function register(params: object): Promise<void> {
  await getAPI("/auth/register", {
    method: "POST",
    data: params,
  });
}
