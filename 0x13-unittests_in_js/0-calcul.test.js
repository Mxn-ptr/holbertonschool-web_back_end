const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('checks output with positive numbers', () => {
    assert.equal(calculateNumber(0, 0), 0);
    assert.equal(calculateNumber(1, 2), 3);
    assert.equal(calculateNumber(3, 5), 8);
    assert.equal(calculateNumber(4, 7), 11);
    assert.equal(calculateNumber(0, 1.6), 2);
    assert.equal(calculateNumber(0.4, 8), 8);
    assert.equal(calculateNumber(10, 2.7), 13);
    assert.equal(calculateNumber(9.1, 9.9), 19);
  });
  it('checks output with negative numbers', () => {
    assert.equal(calculateNumber(-1, -2), -3);
    assert.equal(calculateNumber(-6, -3), -9);
    assert.equal(calculateNumber(-1.1, -2.3), -3);
    assert.equal(calculateNumber(-5.8, -2), -8);
    assert.equal(calculateNumber(-1, -8.4), -9);
    assert.equal(calculateNumber(-1, 2.6), 2);
  });
  it('checks output with wrong argument', () => {
    assert.equal(calculateNumber('a', 8.4), NaN);
    assert.equal(calculateNumber(NaN, 3.6), NaN);
    assert.equal(calculateNumber(NaN, NaN), NaN);
  });
});
