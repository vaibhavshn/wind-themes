const plugin = require('tailwindcss/plugin');
const { init } = require('./src/log');
const { getColors } = require('./src/colors');
const { addBases } = require('./src/base');

const windThemesPlugin = plugin.withOptions(
  ({ defaultTheme, themes, extend = false, importColors = false }) => {
    return ({ addBase, e }) => {
      init(defaultTheme, themes, extend, importColors);
      addBases(addBase, defaultTheme, themes, e);
    };
  },
  ({ themes, extend = false, importColors = false }) => {
    const colors = getColors(themes, importColors);
    return {
      theme: {
        ...(extend ? { extend: { colors } } : { colors }),
      },
    };
  }
);

module.exports = windThemesPlugin;
