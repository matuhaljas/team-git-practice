const { test } = require('node:test');
const assert = require('node:assert/strict');
const { countCompleted } = require('./countCompleted:samuel-beekmann.cjs');

// 1. Tavaline juhtum: segamini tehtud ja tegemata elemendid
test('tavaline juhtum: loeb kokku elemendid, mille completed on true', () => {
  const items = [
    { id: 1, completed: true },
    { id: 2, completed: false },
    { id: 3, completed: true },
  ];
  assert.equal(countCompleted(items), 2);
});

// 2. Vigane juhtum: completed ei ole päris true (string, number, null, puudub)
test('vigane juhtum: väärtusi, mis pole täpselt true, ei loeta', () => {
  const items = [
    { completed: 'true' },
    { completed: 1 },
    { completed: null },
    {},
  ];
  assert.equal(countCompleted(items), 0);
});

// 3. Piirjuhtum: tühi massiiv
test('piirjuhtum: tühi massiiv tagastab 0', () => {
  assert.equal(countCompleted([]), 0);
});
