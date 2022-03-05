const { error } = require('./log')

const hex2rgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `${r}, ${g}, ${b}`
}

const RGB_EXTRACT = /^rgba?\(((,?\s*\d+){3}).+$/

const varify = (enclose, color, shade = 'DEFAULT') => {
  if (typeof color !== 'string') {
    error(`Color name should be string, you passed a '${typeof color}':`, color)
  }
  if (typeof shade === 'number') {
    shade = shade.toString()
  }
  color = color.trim()
  shade = shade.trim()
  if (enclose) {
    return shade !== 'DEFAULT'
      ? `var(--wt-${color}-${shade})`
      : `var(--wt-${color})`
  }
  return shade !== 'DEFAULT' ? `--wt-${color}-${shade}` : `--wt-${color}`
}

const getCSSVars = (theme) => {
  if (typeof theme !== 'object') {
    error(`Invalid theme provided of type '${typeof theme}'`)
  }
  const vars = {}

  Object.keys(theme).forEach((color) => {
    const shades = theme[color]
    // varify creates and returns css variable name such as:
    // --wt-primary-100 = `shade`;
    if (typeof shades === 'string') {
      vars[varify(false, color)] = processColor(shades)
    } else {
      Object.keys(shades).forEach((shade) => {
        vars[varify(false, color, shade)] = processColor(shades[shade])
      })
    }
  })

  return vars
}

const processColor = (color) => {
  if (typeof color !== 'string') {
    error(`Invalid color provided of type '${typeof color}': ${color}`)
  }
  try {
    return hex2rgb(color)
  } catch (e) {
    // pass
  }
  if (!color.trim().startsWith('rgb')) {
    error(
      `Invalid color: "${color}", supportted formats are hex, rgb and rgba.`
    )
  }
  const [, rgb] = RGB_EXTRACT.exec(color.trim())
  if (rgb.includes(',')) {
    return rgb
  }
  return rgb.split(' ').join(', ')
}

module.exports = {
  varify,
  getCSSVars,
  processColor,
}
