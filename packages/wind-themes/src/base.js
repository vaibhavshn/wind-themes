const { getCSSVars } = require('./utils')

const addBases = (addBase, defaultTheme, themes, e) => {
  const rootStyles = getCSSVars(themes[defaultTheme])

  addBase({
    ':root': rootStyles,
  })

  addBase({
    [`.${e(defaultTheme)}`]: rootStyles,
  })

  Object.keys(themes).forEach((theme) => {
    if (theme !== defaultTheme) {
      addBase({
        [`.${e(theme)}`]: getCSSVars(themes[theme]),
      })
    }
  })
}

module.exports = { addBases }
