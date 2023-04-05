const calculateNumber = require('./1-calcul');
const expect = require('chai').expect;

describe('calculateNumber with type === SUM', () => {
  it('checks output with positive numbers', () => {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    expect(calculateNumber('SUM', 3, 5)).to.equal(8);
    expect(calculateNumber('SUM', 4, 7)).to.equal(11);
    expect(calculateNumber('SUM', 0, 1.6)).to.equal(2);
    expect(calculateNumber('SUM', 0.4, 8)).to.equal(8);
    expect(calculateNumber('SUM', 10, 2.7)).to.equal(13);
    expect(calculateNumber('SUM', 9.1, 9.9)).to.equal(19);
  });
  it('checks output with negative numbers', () => {
    expect(calculateNumber('SUM', -1, -2)).to.equal(-3);
    expect(calculateNumber('SUM', -6, -3)).to.equal(-9);
    expect(calculateNumber('SUM', -1.1, -2.3)).to.equal(-3);
    expect(calculateNumber('SUM', -5.8, -2)).to.equal(-8);
    expect(calculateNumber('SUM', -1, -8.4)).to.equal(-9);
    expect(calculateNumber('SUM', -1, 2.6)).to.equal(2);
  });
  it('checks output with wrong argument', () => {
    expect(calculateNumber('SUM', 'a', 8.4)).to.be.NaN;
    expect(calculateNumber('SUM', NaN, 3.6)).to.be.NaN;
    expect(calculateNumber('SUM', NaN, NaN)).to.be.NaN;
  });
});

describe('calculateNumber with type === SUBTRACT', () => {
  it('checks output with positive numbers', () => {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 7, 2)).to.equal(5);
    expect(calculateNumber('SUBTRACT', 2.6, 2)).to.equal(1);
    expect(calculateNumber('SUBTRACT', 20.1, 8.8)).to.equal(11);
    expect(calculateNumber('SUBTRACT', 1, 9.1)).to.equal(-8);
  });
  it('checks ouput with negative numbers', () => {
    expect(calculateNumber('SUBTRACT', -1, 0)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', -7, -2)).to.equal(-5);
    expect(calculateNumber('SUBTRACT', -1.1, -7.9)).to.equal(7);
    expect(calculateNumber('SUBTRACT', -2.5, 0)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', -12, 14.3)).to.equal(-26);
  });
  it('checks with wrong argument', () => {
    expect(calculateNumber('SUBTRACT', "a", 14.3)).to.be.NaN;
    expect(calculateNumber('SUBTRACT', 2, NaN)).to.be.NaN;
    expect(calculateNumber('SUBTRACT', NaN, NaN)).to.be.NaN;
  });
});

describe('calculateNumber with type == DIVIDE', () => {
  it('checks output with positive numbers', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    expect(calculateNumber('DIVIDE', 10, 4)).to.equal(2.5);
    expect(calculateNumber('DIVIDE', 4.5, 2.9)).to.equal(1.6666666666666667);
    expect(calculateNumber('DIVIDE', 25, 3.2)).to.equal(8.333333333333334);
  });
  it('checks ouput with negative numbers', () => {
    expect(calculateNumber('DIVIDE', -6, -2)).to.equal(3);
    expect(calculateNumber('DIVIDE', -10, 2)).to.equal(-5);
    expect(calculateNumber('DIVIDE', -7.7, -3.2)).to.equal(2.6666666666666665);
  });
  it('checks ouput with 0', () => {
    expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', -5, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 4.3, 0)).to.equal('Error');
  });
  it('check with wrong arguments', () => {
    expect(calculateNumber('DIVIDE', "a", 14.3)).to.be.NaN;
    expect(calculateNumber('DIVIDE', 2, NaN)).to.be.NaN;
    expect(calculateNumber('DIVIDE', NaN, NaN)).to.be.NaN;
  });
});
