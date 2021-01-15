import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#e82f7d'
    }
  },
  typography: {
    fontFamily: [
      '"Titillium Web"',
      'sans-serif'
    ]
  }
})

ReactDOM.render(
  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryParamProvider>
  </Router>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
