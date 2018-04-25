import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

let width = window.innerWidth
if (width < 900) {
    this.state = {SM: true}
} else {
    this.state = {SM: false}
}

ReactDOM.render(<App SM={this.state.SM}/>, document.getElementById('root'))
registerServiceWorker()
