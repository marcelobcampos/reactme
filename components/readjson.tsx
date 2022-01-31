import * as React from 'react'
import { useState } from 'react'
import data from '../public/questions-data.json'

const ReadJson = () => {
  // const [ questions, setQuestions ] = useState([]);

  //const test = JSON.parse(data);
  const questions = JSON.parse(JSON.stringify(data));
  const questionList = questions.map((q: User[]) => {
    return (
    <li key={q.id}>
      <div>
        <span>{q.id}</span><br/>
        <span>{q.title}</span><br/>
        <span>{q.body}</span><br/>
      </div>
    </li> )
  })

  return (
    <div>
      <h3>Questions</h3>
      <ul>{questionList}</ul>
    </div>
  )
}

export default ReadJson;
