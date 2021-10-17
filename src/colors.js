const { varify } = require('./utils');

const getColors = (themes, importColors = false) => {
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
        const varName = varify(true, color);
        vars[color]['DEFAULT'] = ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(${varName}, ${opacityValue})`;
          }
          return `rgb(${varName})`;
        };
      } else {
        Object.keys(shades).forEach((shade) => {
          const varName = varify(true, color, shade);
          vars[color][shade] = ({ opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(${varName}, ${opacityValue})`;
            }
            return `rgb(${varName})`;
          };
        });
      }
    });
  });

  return { ...colors, ...vars };
};

module.exports = { getColors };
