export interface Question {
  id: number;
  question: string;
  options: string[];
  selectedAnswer: string;
  correctAnswer: string;
}

export interface Answer {
  id: number;
  text: string;
  value: boolean;
}
