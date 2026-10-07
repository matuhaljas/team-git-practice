const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidTitle } = require('./martin-kullerkupp.cjs');

test('accepts a normal title', () => {
  assert.equal(isValidTitle('Learn Next.js'), true);
});

test('rejects empty or whitespace-only strings', () => {
  assert.equal(isValidTitle('   '), false);
  assert.equal(isValidTitle(''), false);
});

test('accepts a string of exactly 80 characters', () => {
  const longTitle = 'a'.repeat(80);
  assert.equal(isValidTitle(longTitle), true);
});