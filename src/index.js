import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {  createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import App from './App';
import reportWebVitals from './reportWebVitals';
import reducers from './reducers/'
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))
const defaultTheme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
      <App />
      </ThemeProvider>
    </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


