import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/counter'
import Myscene from './components/myscene'
import FileData from './components/filedata'
import ReadJson from './components/readjson'

const App = () => {
    return <div>
        <h2>React me!</h2>
        <Counter />
        <FileData />
        <ReadJson />
    </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))
