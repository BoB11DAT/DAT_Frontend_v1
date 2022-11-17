import { getAPI } from "~/composables/getAPI";
import {
  Receipt,
  ReceiptRound,
  ReceiptRegistration,
  ReceiptApply,
} from "~/assets/interfaces/receipt";
import { useRegistrationHistoryStore } from "~/store/registrationHistory";
import { storeToRefs } from "pinia";

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

export async function getRegistrationHistorys(): Promise<void> {
  const { data } = await getAPI("/receipt/registration");
  const store = useRegistrationHistoryStore();
  store.setRegistrationHistory(data);
}

export async function applyReceipt(params: ReceiptApply): Promise<Object> {
  const { data } = await getAPI("/receipt/apply", {
    method: "POST",
    data: params,
  });
  return data;
}
