import * as React from 'react'
import { useState, useEffect } from "react";
import { Question } from '../models/question';
import raw from './../public/questions-data.json'

const Quiz = () => {
  const [questionData, setQuestionData] = useState<Question[]>([]);
  //const [value, setValue] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<string[]>([]);

  const loadData = () => JSON.parse(JSON.stringify(raw));

  const loadQuestions = () => {
    const data = loadData().map((item: Question[]) => {
      return item
    });

    setResult([]);
    setQuestionData(data);
  }

  const onFormSubmit = () => {
    setResult([]);
    const results: string[] = [];

    for (let q of questionData) {
      results.push(`Question ${q.id} - ${(q.correctAnswer === q.selectedAnswer ? 'Correct' : 'Incorrect')}`);
    }
    setQuestionData([]);
    setResult(results);
    setShowResult(true);
  }

  const callingParent = (question: Question) => {
    console.log(question);
  }

  interface QuestionFormProps {
    callingParent: (question: Question) => void;
  }

  const QuestionForm = (props: QuestionFormProps) => {
    const { callingParent } = props;
    const [selected, setSelected] = useState('');

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>, question: Question):void => {
      setSelected(e.currentTarget.value);
      question.selectedAnswer = e.currentTarget.value;
    }

    return (
      <form onSubmit={() => onFormSubmit()}>
        <ul>
          {questionData.map((q, index) =>
            <li key={`question-${q.id.toString()}`}>
              {index + 1} - {q.question}
              <ul>
                {q.options.map((a) =>
                  <li key={`answer-${a}`}>
                    <label>
                      <input
                        name={`question-${q.id}`}
                        type="radio"
                        value={a}
                        checked={q.selectedAnswer === a}
                        onChange={(e) => handleRadioChange(e, q)} />
                      {a}
                    </label>
                  </li>
                )}
              </ul>
            </li>
          )}
        </ul>
        <button type="submit">Submit</button>
      </form>
    )
  };

  return (
    <div>
      <h3>Questionnaire</h3>
      <button onClick={() => loadQuestions()}>Load Questions</button>
      <div>
        {questionData.length > 0 ? <QuestionForm callingParent={callingParent} /> : null}
      </div>
      {showResult
        ? <ul>{result.map((x, index) => <li key={`result-${index}`}>{x}</li> )}</ul>
        : ''
      }
    </div>
  )
}

export default Quiz;
