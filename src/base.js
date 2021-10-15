const { varify } = require('./utils');

const getCSSVars = (theme) => {
  const vars = {};

  Object.keys(theme).forEach((color) => {
    const shades = theme[color];
    if (typeof shades === 'string') {
      vars[varify(false, color)] = shades;
    } else {
      Object.keys(shades).forEach((shade) => {
        vars[varify(false, color, shade)] = shades[shade];
      });
    }
  });

  return vars;
};

const addBases = (addBase, defaultTheme, themes, e) => {
  const rootStyles = getCSSVars(themes[defaultTheme]);

  addBase({
    ':root': rootStyles,
  });

  addBase({
    [`.${e(defaultTheme)}`]: rootStyles,
  });

  Object.keys(themes).forEach((theme) => {
    if (theme !== defaultTheme) {
      addBase({
        [`.${e(theme)}`]: getCSSVars(themes[theme]),
      });
    }
  });
};

module.exports = { addBases };
