const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber with type === SUM', () => {
  it('checks output with positive numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
    assert.strictEqual(calculateNumber('SUM', 3, 5), 8);
    assert.strictEqual(calculateNumber('SUM', 4, 7), 11);
    assert.strictEqual(calculateNumber('SUM', 0, 1.6), 2);
    assert.strictEqual(calculateNumber('SUM', 0.4, 8), 8);
    assert.strictEqual(calculateNumber('SUM', 10, 2.7), 13);
    assert.strictEqual(calculateNumber('SUM', 9.1, 9.9), 19);
  });
  it('checks output with negative numbers', () => {
    assert.strictEqual(calculateNumber('SUM', -1, -2), -3);
    assert.strictEqual(calculateNumber('SUM', -6, -3), -9);
    assert.strictEqual(calculateNumber('SUM', -1.1, -2.3), -3);
    assert.strictEqual(calculateNumber('SUM', -5.8, -2), -8);
    assert.strictEqual(calculateNumber('SUM', -1, -8.4), -9);
    assert.strictEqual(calculateNumber('SUM', -1, 2.6), 2);
  });
  it('checks output with wrong argument', () => {
    assert.strictEqual(calculateNumber('SUM', 'a', 8.4), NaN);
    assert.strictEqual(calculateNumber('SUM', NaN, 3.6), NaN);
    assert.strictEqual(calculateNumber('SUM', NaN, NaN), NaN);
  });
});

describe('calculateNumber with type === SUBSTRACT', () => {
  it('checks output with positive numbers', () => {
    assert.strictEqual(calculateNumber('SUBSTRACT', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUBSTRACT', 1, 3), -2);
    assert.strictEqual(calculateNumber('SUBSTRACT', 7, 2), 5);
    assert.strictEqual(calculateNumber('SUBSTRACT', 2.6, 2), 1);
    assert.strictEqual(calculateNumber('SUBSTRACT', 20.1, 8.8), 11);
    assert.strictEqual(calculateNumber('SUBSTRACT', 1, 9.1), -8);
  });
  it('checks ouput with negative numbers', () => {
    assert.strictEqual(calculateNumber('SUBSTRACT', -1, 0), -1);
    assert.strictEqual(calculateNumber('SUBSTRACT', -7, -2), -5);
    assert.strictEqual(calculateNumber('SUBSTRACT', -1.1, -7.9), 7);
    assert.strictEqual(calculateNumber('SUBSTRACT', -2.5, 0), -2);
    assert.strictEqual(calculateNumber('SUBSTRACT', -12, 14.3), -26);
  });
  it('checks with wrong argument', () => {
    assert.strictEqual(calculateNumber('SUBSTRACT', "a", 14.3), NaN);
    assert.strictEqual(calculateNumber('SUBSTRACT', 2, NaN), NaN);
    assert.strictEqual(calculateNumber('SUBSTRACT', NaN, NaN), NaN);
  });
});

describe('calculateNumber with type == DIVIDE', () => {
  it('checks output with positive numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 10, 4), 2.5);
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, 2.9), 1.6666666666666667);
    assert.strictEqual(calculateNumber('DIVIDE', 25, 3.2), 8.333333333333334);
  });
  it('checks ouput with negative numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -6, -2), 3);
    assert.strictEqual(calculateNumber('DIVIDE', -10, 2), -5);
    assert.strictEqual(calculateNumber('DIVIDE', -7.7, -3.2), 2.6666666666666665);
  });
  it('checks ouput with 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 0), Infinity);
    assert.strictEqual(calculateNumber('DIVIDE', -5, 0), -Infinity);
    assert.strictEqual(calculateNumber('DIVIDE', 4.3, 0), Infinity);
  });
  it('check with wrong arguments', () => {
    assert.strictEqual(calculateNumber('DIVIDE', "a", 14.3), NaN);
    assert.strictEqual(calculateNumber('DIVIDE', 2, NaN), NaN);
    assert.strictEqual(calculateNumber('DIVIDE', NaN, NaN), NaN);
  });
});
