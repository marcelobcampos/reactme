export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  text: string;
  value: boolean;
}
