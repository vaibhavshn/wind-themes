const { varify } = require('./utils');
const hex2rgb = require('hex-rgb-js');

const { error } = require('./log');

const rgbExtract = /^rgba?\(((,?\s*\d+){3}).+$/;

const processColor = (color) => {
  try {
    const { red, green, blue } = hex2rgb(color);
    return `${red}, ${green}, ${blue}`;
  } catch (e) {
    // pass
  }
  if (!color.trim().startsWith('rgb')) {
    const message = `Invalid color: "${color}", supportted formats are hex, rgb and rgba.`;
    error(message);
    throw new Error(message);
  }
  const [, rgb] = rgbExtract.exec(color.trim());
  return rgb.split(' ').join(', ');
};

const getCSSVars = (theme) => {
  const vars = {};

  Object.keys(theme).forEach((color) => {
    const shades = theme[color];
    // varify creates and returns css variable name such as:
    // --wt-primary-100 = `shade`;
    if (typeof shades === 'string') {
      vars[varify(false, color)] = processColor(shades);
    } else {
      Object.keys(shades).forEach((shade) => {
        vars[varify(false, color, shade)] = processColor(shades[shade]);
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
