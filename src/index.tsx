// @ts-ignore
import preset from '@rebass/preset';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { ToDoContextProvider } from './context/ToDoContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

export const theme = {
  ...preset,
  ...{
    colors: {
      ...preset.colors,
      primary: '#2196f3',
      success: '#4caf50',
      danger: '#f44336',
    },
    buttons: {
      ...preset.buttons,
      danger: {
        color: 'white',
        bg: 'danger',
      },
    },
  },
};

console.log(theme);

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToDoContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ToDoContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
