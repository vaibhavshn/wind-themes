import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '../react';
import { defaultTheme, themes } from '../themes.json';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme={defaultTheme} themes={Object.keys(themes)}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
