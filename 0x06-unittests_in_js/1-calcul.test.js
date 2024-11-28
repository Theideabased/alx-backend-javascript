// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUM',1, 3), 4);
  });

  it('should round 3.7 to 4 and return 5 for inputs 1 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUM',1, 3.7), 5);
  });

  it('should round 1.2 to 1 and 3.7 to 4 and return 5 for inputs 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('should round 1.5 to 2 and 3.7 to 4 and return 6 for inputs 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUM',1.5, 3.7), 6);
  });

  // Edge cases
  it('should round negative numbers correctly', () => {
    assert.strictEqual(calculateNumber('SUM',-1.4, -3.6), -5);
    assert.strictEqual(calculateNumber('SUM',-1.5, -3.7), -5);
  });

  it('should return correct sum when one of the numbers is zero', () => {
    assert.strictEqual(calculateNumber('SUM',0, 3.7), 4);
    assert.strictEqual(calculateNumber('SUM',1.2, 0), 1);
  });
});

// Testing the substraction value
describe('calculateNumber', () => {
  it('should return the subtraction of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT',1, 3), 2);
  });

  it('should round 3.7 to 4 and return 3 for inputs 1 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT',1, 3.7), 3);
  });

  it('should round 1.2 to 1 and 3.7 to 4 and return 3 for inputs 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), 3);
  });

  it('should round 1.5 to 2 and 3.7 to 4 and return 6 for inputs 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT',1.5, 3.7), 2);
  });

  // Edge cases
  it('should round negative numbers correctly and give the substraction', () => {
    assert.strictEqual(calculateNumber('SUBTRACT',-1.4, -3.6), -3);
    assert.strictEqual(calculateNumber('SUBTRACT',-1.5, -3.7), -3);
  });

  it('should return correct remainder when one of the numbers is zero', () => {
    assert.strictEqual(calculateNumber('SUBTRACT',0, 3.7), 4);
    assert.strictEqual(calculateNumber('SUBTRACT',1.2, 0), -1);
  });
});

//Testing the dividing the value
describe('calculateNumber', () => {
  it('should return the division of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE',3, 3), 1);
  });

  it('should round 3.7 to 4 and return 4 for inputs 3.7 and 1', () => {
    assert.strictEqual(calculateNumber('DIVIDE',3.7, 1), 4);
  });

  it('should round 1.2 to 1 and 3.7 to 4 and return 4 for inputs 3.7 and 1.2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.2), 4);
  });

  it('should round 1.5 to 2 and 3.7 to 4 and return 2 for inputs 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber('DIVIDE',3.7, 1.5), 2);
  });

  // Edge cases
  it('should round negative numbers correctly and get the division correctly', () => {
    assert.strictEqual(calculateNumber('DIVIDE',-3.6, -1.4), 4);
    assert.strictEqual(calculateNumber('DIVIDE',-3.7, 1.5), -2);
  });

  it('should return correct division value when one of the numbers is zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE',0, 3.7), 0);
    assert.strictEqual(calculateNumber('DIVIDE',1.2, 0), 'Error');
  });
});
