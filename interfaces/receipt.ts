export class Receipt {
  receipt_id: number;
  receipt_round: string;
  receipt_start_date: Date;
  receipt_end_date: Date;
  receipt_type: number;
}

export class ReceiptRound {
  receipt_round: string;
}

export class ReceiptRegistration {
  receipt_round: string;
  receipt_registration_number: string;
  receipt_available_start_date: Date;
  receipt_available_end_date: Date;
  receipt_registration_open: boolean;
  receipt_registration_end: boolean;
}

export class ReceiptApply {
  receipt_registration_number: string;
}

export class ReceiptRegistrationCookie {
  receiptRegistrationNumber: string;
}
