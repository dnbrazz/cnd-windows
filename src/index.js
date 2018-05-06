import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
// Analytics
import ReactGA from 'react-ga'

let width = window.innerWidth
if (width < 900) {
  this.state = {SM: true}
} else {
  this.state = {SM: false}
}

ReactGA.initialize('UA-25624812-5')

ReactDOM.render(<App SM={this.state.SM} />, document.getElementById('root'))
registerServiceWorker()
