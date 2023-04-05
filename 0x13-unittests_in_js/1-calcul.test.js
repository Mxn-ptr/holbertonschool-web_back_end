const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber with type === SUM', () => {
  it('checks output with positive numbers', () => {
    assert.equal(calculateNumber('SUM', 0, 0), 0);
    assert.equal(calculateNumber('SUM', 1, 2), 3);
    assert.equal(calculateNumber('SUM', 3, 5), 8);
    assert.equal(calculateNumber('SUM', 4, 7), 11);
    assert.equal(calculateNumber('SUM', 0, 1.6), 2);
    assert.equal(calculateNumber('SUM', 0.4, 8), 8);
    assert.equal(calculateNumber('SUM', 10, 2.7), 13);
    assert.equal(calculateNumber('SUM', 9.1, 9.9), 19);
  });
  it('checks output with negative numbers', () => {
    assert.equal(calculateNumber('SUM', -1, -2), -3);
    assert.equal(calculateNumber('SUM', -6, -3), -9);
    assert.equal(calculateNumber('SUM', -1.1, -2.3), -3);
    assert.equal(calculateNumber('SUM', -5.8, -2), -8);
    assert.equal(calculateNumber('SUM', -1, -8.4), -9);
    assert.equal(calculateNumber('SUM', -1, 2.6), 2);
  });
  it('checks output with wrong argument', () => {
    assert.equal(calculateNumber('SUM', 'a', 8.4), NaN);
    assert.equal(calculateNumber('SUM', NaN, 3.6), NaN);
    assert.equal(calculateNumber('SUM', NaN, NaN), NaN);
  });
});

describe('calculateNumber with type === SUBSTRACT', () => {
  it('checks output with positive numbers', () => {
    assert.equal(calculateNumber('SUBSTRACT', 0, 0), 0);
    assert.equal(calculateNumber('SUBSTRACT', 1, 3), -2);
    assert.equal(calculateNumber('SUBSTRACT', 7, 2), 5);
    assert.equal(calculateNumber('SUBSTRACT', 2.6, 2), 1);
    assert.equal(calculateNumber('SUBSTRACT', 20.1, 8.8), 11);
    assert.equal(calculateNumber('SUBSTRACT', 1, 9.1), -8);
  });
  it('checks ouput with negative numbers', () => {
    assert.equal(calculateNumber('SUBSTRACT', -1, 0), -1);
    assert.equal(calculateNumber('SUBSTRACT', -7, -2), -5);
    assert.equal(calculateNumber('SUBSTRACT', -1.1, -7.9), 7);
    assert.equal(calculateNumber('SUBSTRACT', -2.5, 0), -2);
    assert.equal(calculateNumber('SUBSTRACT', -12, 14.3), -26);
  });
  it('checks with wrong argument', () => {
    assert.equal(calculateNumber('SUBSTRACT', "a", 14.3), NaN);
    assert.equal(calculateNumber('SUBSTRACT', 2, NaN), NaN);
    assert.equal(calculateNumber('SUBSTRACT', NaN, NaN), NaN);
  });
});

describe('calculateNumber with type == DIVIDE', () => {
  it('checks output with positive numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    assert.equal(calculateNumber('DIVIDE', 10, 4), 2.5);
    assert.equal(calculateNumber('DIVIDE', 4.5, 2.9), 1.6666666666666667);
    assert.equal(calculateNumber('DIVIDE', 25, 3.2), 8.333333333333334);
  });
  it('checks ouput with negative numbers', () => {
    assert.equal(calculateNumber('DIVIDE', -6, -2), 3);
    assert.equal(calculateNumber('DIVIDE', -10, 2), -5);
    assert.equal(calculateNumber('DIVIDE', -7.7, -3.2), 2.6666666666666665);
  });
  it('checks ouput with 0', () => {
    assert.equal(calculateNumber('DIVIDE', 10, 0), Infinity);
    assert.equal(calculateNumber('DIVIDE', -5, 0), -Infinity);
    assert.equal(calculateNumber('DIVIDE', 4.3, 0), Infinity);
  });
  it('check with wrong arguments', () => {
    assert.equal(calculateNumber('DIVIDE', "a", 14.3), NaN);
    assert.equal(calculateNumber('DIVIDE', 2, NaN), NaN);
    assert.equal(calculateNumber('DIVIDE', NaN, NaN), NaN);
  });
});
