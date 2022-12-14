export class Objection {
  objection_id: number;
  objection_title: string;
  objection_answered: boolean;
  objection_created_date: Date;
}

export class ObjectionDetail {
  receipt_registration_number: string;
  receipt_judge_number: number;
  objection_title: string;
  objection_content: string;
  objection_answered: boolean;
  objection_created_date: Date;
  objection_answer?: string;
}

export class CreateObjection {
  objection_title: string;
  objection_content: string;
  receipt_registration_number: string;
  receipt_judge_number: number;
}
