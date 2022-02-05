export interface Question {
  id: number;
  question: string;
  options: string[];
  answers: Answer[];
}

export interface Answer {
  id: number;
  text: string;
  value: boolean;
}
