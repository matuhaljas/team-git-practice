const test = require('node:test');
const assert = require('node:assert');
const { isValidMinutes } = require('./kevin-saluste.cjs');

test('kehtivad väärtused', () => {
  assert.strictEqual(isValidMinutes(1), true);
  assert.strictEqual(isValidMinutes(90), true);
  assert.strictEqual(isValidMinutes(180), true);
});

test('vahemikust väljas', () => {
  assert.strictEqual(isValidMinutes(0), false);
  assert.strictEqual(isValidMinutes(181), false);
  assert.strictEqual(isValidMinutes(-5), false);
});

test('mitte-täisarvud ja vale tüüp', () => {
  assert.strictEqual(isValidMinutes(1.5), false);
  assert.strictEqual(isValidMinutes('30'), false);
  assert.strictEqual(isValidMinutes(NaN), false);
  assert.strictEqual(isValidMinutes(null), false);
  assert.strictEqual(isValidMinutes(undefined), false);
});