const test = require('node:test');
const assert = require('node:assert/strict');
const { getTotalQuantity } = require('./chrismartin-murdvee.cjs');

// tavaline juhtum
test('liidab kõik quantity väärtused kokku', () => {
  const items = [{ quantity: 2 }, { quantity: 3 }, { quantity: 5 }];
  assert.equal(getTotalQuantity(items), 10);
});

// vigane juhtum
test('ei liida väärtusi, mis pole numbrid', () => {
  const items = [{ quantity: '4' }, {}, { quantity: null }, { quantity: 1 }];
  assert.equal(getTotalQuantity(items), 1);
});

// piirjuhtum
test('tühi massiiv tagastab 0', () => {
  assert.equal(getTotalQuantity([]), 0);
});
