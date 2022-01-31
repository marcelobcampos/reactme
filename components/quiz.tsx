import * as React from 'react'
import { useState, useEffect } from "react";
import Question from './models/question';
import raw from './../public/questions-data.json'

const Quiz = () => {
  const [questionData, setQuestionData] = useState<Questions[]>([]);

  const loadData = () => JSON.parse(JSON.stringify(raw));

  const loadQuestions = () => {
    const test = loadData().map((item: Question[]) => {
      return item
    };

    setQuestionData(test);
  }

  const onValueChange = (event) => {
    debugger;
    console.log(event.target.value);
  }

  return (
    <div>
      <h3>Questionnaire</h3>
      <button onClick={() => loadQuestions()}>Load Questions</button>
      <ul>
        {questionData.map((q, index) =>
          <li key={`question-${q.id.toString()}`}>
            {q.question}
            <ul>
              {q.answers.map((a, index) =>
                <li key={`answer-${a.text}-${q.id.toString()}`}>
                  <label>
                    <input
                      type="radio"
                      value={a.value}
                      checked={a.value}
                      onChange={() => onValueChange()} />
                    {a.text}
                  </label>
                </li>
              )}
            </ul>
          </li>
        )}
      </ul>
    </div>
  )

  // return (
  //   <div>
  //     <h3>Questionnaire</h3>
  //     <button onClick={() => loadQuestions()}>Load Questions</button>
  //     <ul>
  //       {questionData.map((q, index) =>
  //         <li key={`question-${q.id.toString()}`}>
  //           {q.question}
  //           <ul>
  //             {q.answers.map((a, index) =>
  //               <li key={`answer-${a.text}-${q.id.toString()}`}>
  //                 <input type="checkbox" name={q.text} value={q.value} />
  //                 <label htmlFor={a.id}>{a.text}</label>
  //               </li>
  //             )}
  //           </ul>
  //         </li>
  //       )}
  //     </ul>
  //   </div>
  // )
}

export default Quiz;
