const { varify } = require('./utils');

const getColors = (themes, importColors) => {
  const vars = {};
  const colors = {};

  Object.keys(themes).forEach((theme) => {
    const data = themes[theme];

    if (importColors) {
      // import colors such as: text-default-primary-100
      colors[theme] = data;
    }

    Object.keys(data).forEach((color) => {
      if (!vars[color]) {
        vars[color] = {};
      }

      const shades = data[color];

      if (typeof shades === 'string') {
        vars[color]['DEFAULT'] = varify(true, color);
      } else {
        Object.keys(shades).forEach((shade) => {
          vars[color][shade] = varify(true, color, shade);
        });
      }
    });
  });

  return { ...colors, ...vars };
};

module.exports = { getColors };
