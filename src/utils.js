const varify = (enclose, color, shade = 'DEFAULT') => {
  if (enclose) {
    return shade !== 'DEFAULT'
      ? `var(--wt-${color}-${shade})`
      : `var(--wt-${color})`;
  }
  return shade !== 'DEFAULT' ? `--wt-${color}-${shade}` : `--wt-${color}`;
};

module.exports = {
  varify,
};
