const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidTitle } = require('./marcus-haljasoks.cjs');

test('accepts a normal title', () => {
  assert.equal(isValidTitle('Learn Next.js'), true);
});

test('rejects empty, whitespace-only, and non-string values', () => {
  assert.equal(isValidTitle(''), false);
  assert.equal(isValidTitle('   '), false);
  assert.equal(isValidTitle(null), false);
});

test('accepts a title of exactly 80 characters', () => {
  assert.equal(isValidTitle('a'.repeat(80)), true);
});

test('rejects a title longer than 80 characters', () => {
  assert.equal(isValidTitle('a'.repeat(81)), false);
});