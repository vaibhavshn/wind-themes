const { varify, getCSSVars, processColor } = require('./utils');

test(`varify() tests`, () => {
  // create vars
  expect(varify(true, 'secondary')).toBe('var(--wt-secondary)');
  expect(varify(true, 'primary', '100')).toBe('var(--wt-primary-100)');

  // with spaces in between
  expect(varify(true, ' primary', 200)).toBe('var(--wt-primary-200)');
  expect(varify(true, ' primary ', ' 300')).toBe('var(--wt-primary-300)');

  // create just the var names
  expect(varify(false, 'primary')).toBe('--wt-primary');
  expect(varify(false, 'secondary', 'dark')).toBe('--wt-secondary-dark');

  // with spaces in between and using numbers
  expect(varify(false, 'primary ', 100)).toBe('--wt-primary-100');

  // check if wrong types throw an error
  expect(() => varify(true, {}, '100')).toThrow();
  expect(() => varify(false, true, 100)).toThrow();
});

test('getCSSVars() tests', () => {
  // pass invalid types
  expect(() => getCSSVars()).toThrow();
  expect(() => getCSSVars(12)).toThrow();

  expect(
    getCSSVars({
      primary: '#fff',
      secondary: {
        DEFAULT: '#000',
        100: '#fff',
      },
      tertiary: {
        dark: 'rgb(12, 12, 12)',
        'light-light': 'rgb(1 1 1)',
      },
    })
  ).toEqual({
    '--wt-primary': '255, 255, 255',
    '--wt-secondary': '0, 0, 0',
    '--wt-secondary-100': '255, 255, 255',
    '--wt-tertiary-dark': '12, 12, 12',
    '--wt-tertiary-light-light': '1, 1, 1',
  });
});

test('processColor() tests', () => {
  expect(() => processColor()).toThrow();
  expect(() => processColor(122)).toThrow();

  expect(processColor('#fff')).toBe('255, 255, 255');
  expect(processColor('#000000')).toBe('0, 0, 0');
  expect(processColor('#555')).toBe('85, 85, 85');

  expect(processColor('rgb(0 0 0 )')).toBe('0, 0, 0');
  expect(processColor('rgba(0, 0, 0 , 0.5 )')).toBe('0, 0, 0');
  expect(() => processColor('hsl(0, 0, 0 , 0.5 )')).toThrow();
});
