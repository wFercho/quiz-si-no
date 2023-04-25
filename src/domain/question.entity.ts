export type ID = string | number

export interface Question {
  id: ID;
  value: string;
  answer: boolean;
}

export interface QuestionAnswerd extends Question {
  answered: boolean | null;
}

