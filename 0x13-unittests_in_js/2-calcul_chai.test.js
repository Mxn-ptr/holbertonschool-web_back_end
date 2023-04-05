const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('when type is SUM', () => {
    it('it round the first argument', () => {
        expect(calculateNumber('SUM', 1.0, 0), 1);
        expect(calculateNumber('SUM', 1.3, 0), 1);
        expect(calculateNumber('SUM', 1.7, 0), 2);
    });
    
    it('it round the second argument', () => {
        expect(calculateNumber('SUM', 0, 1.0), 1);
        expect(calculateNumber('SUM', 0, 1.3), 1);
        expect(calculateNumber('SUM', 0, 1.7), 2);
    });
    
    it('it should return the right number', () => {
        expect(calculateNumber('SUM', 1.3, 0), 1);
        expect(calculateNumber('SUM', 0, 1.2), 1);
        expect(calculateNumber('SUM', 1.3, 1.3), 2);
        expect(calculateNumber('SUM', 1.7, 1.2), 3);
        expect(calculateNumber('SUM', 1.3, 1.8), 3);
        expect(calculateNumber('SUM', 1.6, 1.8), 4);
    });
  });

  describe('when type is SUBTRACT', () => {
    it('it round the first argument', () => {
        expect(calculateNumber('SUBTRACT', 1.0, 0), 1);
        expect(calculateNumber('SUBTRACT', 1.3, 0), 1);
        expect(calculateNumber('SUBTRACT', 1.7, 0), 2);
    });
    
    it('it round the second argument', () => {
        expect(calculateNumber('SUBTRACT', 0, 1.0), -1);
        expect(calculateNumber('SUBTRACT', 0, 1.3), -1);
        expect(calculateNumber('SUBTRACT', 0, 1.7), -2);
    });
    
    it('it should return the right number', () => {
        expect(calculateNumber('SUBTRACT', 1.3, 0), 1);
        expect(calculateNumber('SUBTRACT', 0, 1.2), -1);
        expect(calculateNumber('SUBTRACT', 1.3, 1.3), 0);
        expect(calculateNumber('SUBTRACT', 1.7, 1.2), 1);
        expect(calculateNumber('SUBTRACT', 1.3, 1.8), -1);
        expect(calculateNumber('SUBTRACT', 1.6, 1.8), 0);
    });
  });

  describe('when type is DIVIDE', () => {
    it('it round the first argument', () => {
        expect(calculateNumber('DIVIDE', 10.0, 2), 5);
        expect(calculateNumber('DIVIDE', 10.3, 2), 5);
        expect(calculateNumber('DIVIDE', 10.7, 2), 5.5);
    });
    
    it('it round the second argument', () => {
        expect(calculateNumber('DIVIDE', 10, 1.0), 10);
        expect(calculateNumber('DIVIDE', 10, 1.3), 10);
        expect(calculateNumber('DIVIDE', 10, 1.7), 5);
    });
    
    it('it should return the right number', () => {
        expect(calculateNumber('DIVIDE', 10.3, 2), 5);
        expect(calculateNumber('DIVIDE', 10, 1.2), 10);
        expect(calculateNumber('DIVIDE', 10.3, 1.3), 10);
        expect(calculateNumber('DIVIDE', 10.7, 1.2), 11);
        expect(calculateNumber('DIVIDE', 10.3, 1.8), 5);
        expect(calculateNumber('DIVIDE', 10.6, 1.8), 5.5);
    });

    it('it should return Error iexpect to 0', () => {
        expect(calculateNumber('DIVIDE', 10.3, 0).toLowerCase(), 'error');
        expect(calculateNumber('DIVIDE', 10.7, 0).toLowerCase(), 'error');
        expect(calculateNumber('DIVIDE', 10.3, 0.3).toLowerCase(), 'error');
        expect(calculateNumber('DIVIDE', 10.7, 0.2).toLowerCase(), 'error');
    });
  });
});
