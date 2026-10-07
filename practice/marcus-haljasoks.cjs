
function isValidTitle(value) {
  return typeof value === 'string' && value.trim().length >= 1 && value.trim().length <= 80;
}

module.exports = { isValidTitle };