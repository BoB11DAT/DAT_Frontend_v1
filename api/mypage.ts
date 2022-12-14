import { getAPI } from "~~/composables/getAPI";
import { CreateObjection, ObjectionDetail } from "~~/interfaces/mypage";

export async function createObjection(params: CreateObjection): Promise<void> {
  await getAPI("/user/objection", {
    method: "POST",
    data: params,
  });
}
