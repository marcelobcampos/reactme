import * as React from 'react'
import ReactDOM from 'react-dom'
// import FileData from './components/filedata'
import Quiz from './components/quiz'

const App = () => {
    return <div>
        <h2>React me!</h2>
        <Quiz />
    </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))
