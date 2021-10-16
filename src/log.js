const { blue, underline, yellow, red } = require('chalk');

const log = function () {
  console.log(blue('[wind-themes]'), ...arguments);
};

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
  log,
  init,
  error() {
    log(red('error'), '-', ...arguments);
  },
};
