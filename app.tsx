import * as React from 'react'
import ReactDOM from 'react-dom'
import Typography from '@mui/material/Typography'
// import FileData from './components/filedata'
import Quiz from './components/quiz'

const App = () => {
    return <div>
        <Typography variant="h3" gutterBottom component="div">React me!</Typography>
        <Quiz />
    </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))
