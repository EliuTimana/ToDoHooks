// @ts-ignore
import preset from '@rebass/preset';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { ToDoContextProvider } from './context/ToDoContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ToDoContextProvider>
      <ThemeProvider theme={{ ...preset, colors: { primary: '#2196f3', success: '#4caf50' } }}>
        <App />
      </ThemeProvider>
    </ToDoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
