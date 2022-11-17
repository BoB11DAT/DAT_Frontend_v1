import { getAPI } from "~/composables/getAPI";
import {
  Receipt,
  ReceiptRound,
  ReceiptRegistration,
} from "~/assets/interfaces/receipt";

export async function getReceipts(): Promise<Receipt[]> {
  const { data } = await getAPI("/receipt");
  return data as Receipt[];
}

export async function receiptRegistration(
  params: ReceiptRound,
): Promise<ReceiptRegistration> {
  const { data } = await getAPI("/receipt/registration", {
    method: "POST",
    data: params,
  });
  return data as ReceiptRegistration;
}
