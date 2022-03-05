const themes = require('./src/themes.json')
const windThemes = require('wind-themes')

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        asphalt: '#181818',
      },
    },
  },
  plugins: [windThemes(themes)],
}
