// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round 3.7 to 4 and return 5 for inputs 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round 1.2 to 1 and 3.7 to 4 and return 5 for inputs 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round 1.5 to 2 and 3.7 to 4 and return 6 for inputs 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Edge cases
  it('should round negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -6);
  });

  it('should return correct sum when one of the numbers is zero', () => {
    assert.strictEqual(calculateNumber(0, 3.7), 4);
    assert.strictEqual(calculateNumber(1.2, 0), 1);
  });
});

