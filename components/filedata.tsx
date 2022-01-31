import * as React from 'react'
import { useEffect, useState } from 'react'
import raw from '../textdata.csv'

const FileData = () => {
  const [ text, setText ] = useState('Bonjour !');
  const [ fileName, setFileName] = useState('');
  const [ fileContent, setContent] = useState('');


  useEffect(() => {
    fetch(raw)
      .then(x => x.text())
      .then(x => {
        console.log('textdata: ', x);
        setText(x);
      })
  })

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setFileName(file.name);
      setContent(reader.result);
    }
    reader.onerror = () => {
      console.log('file error: ', reader.error)
    }
  }

  return (
    <div>
      <h3>File Data</h3>
      <input type="file" onChange={handleFileChange} />
      <br />
      <p>{fileName}</p>
      <p>{fileContent}</p>
      <span>{text}</span>
    </div>
  )
}

export default FileData;
