function isValidTitle(value) {
  if (typeof value !== 'string') return false;
  const trimmed = value.trim();
  return trimmed.length >= 1 && trimmed.length <= 80;
}

module.exports = { isValidTitle };