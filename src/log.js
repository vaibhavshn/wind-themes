const { blue, underline, yellow } = require('chalk');

const log = function () {
  console.log(blue('[wind-themes]'), ...arguments);
};

/**
 * Prints the themes config
 * @param {string} defaultTheme
 * @param {Record<string, any>} themes
 */
const init = (defaultTheme, themes, extend, importColors) => {
  if (typeof themes !== 'object') return;
  const names = Object.keys(themes).map((theme) => {
    return theme !== defaultTheme ? theme : underline(theme);
  });
  log('extend:', yellow(extend));
  log('themes:', yellow(names.join(', ')));
  log('import colors from theme:', yellow(importColors));
};

module.exports = {
  init,
};
