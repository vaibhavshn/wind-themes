const log = function () {
  if (process.env.NODE_ENV !== 'test')
    console.log('🎨 [wind-themes]', ...arguments)
}

const init = (defaultTheme, themes, extend, importColors) => {
  if (typeof themes !== 'object') return
  const names = Object.keys(themes)
  log('extend:', extend)
  log('themes:', names.join(', '))
  log('import colors from theme:', importColors)
}

module.exports = {
  log,
  init,
  error() {
    log('❌', ...arguments)
    throw new Error()
  },
}
