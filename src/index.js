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
    primary: {
      main: 'rgba(0, 0, 0, 0.87)'
    },
    secondary: {
      main: '#e82f7d'
    }
  },
  typography: {
    fontFamily: [
      '"Titillium Web"',
      'sans-serif'
    ]
  },
  overrides: {
    MuiInput: {
      root: {
        padding: '0 .5em',
        backgroundColor: '#e82f7d',
        color: 'white'
      }
    },
    MuiInputAdornment: {
      root: {
        '& > *': {
          color: 'white !important',
          fontSize: '1.5rem'
        }
      }
    },
    MuiDialogActions: {
      root: {
        justifyContent: 'flex-start',
        '& > *:last-child': {
          marginLeft: 'auto !important'
        }
      }
    }
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
