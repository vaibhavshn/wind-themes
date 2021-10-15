const themes = require('./themes.json');
const windThemes = require('./plugin');

module.exports = {
  content: ['./index.html', './example/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        asphalt: '#181818'
      }
    }
  },
  plugins: [
    windThemes(themes)
  ],
};
