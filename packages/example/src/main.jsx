import { render } from 'react-dom'
import { ThemeProvider } from 'wind-themes/react'
import App from './App'
import './index.css'

import { defaultTheme, themes } from './themes.json'

render(
  <ThemeProvider defaultTheme={defaultTheme} themes={Object.keys(themes)}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
