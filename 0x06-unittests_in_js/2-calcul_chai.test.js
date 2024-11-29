// 2-calcul.test.js
var except = require('chai').expect;
const calculateNumber = require('./2-calcul');

describe('using SUM in calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    except(calculateNumber('SUM',1, 3)).to.deep.equal(4);
  });

  it('should round 3.7 to 4 and return 5 for inputs 1 and 3.7', () => {
    except(calculateNumber('SUM',1, 3.7)).to.deep.equal(5);
  });

  it('should round 1.2 to 1 and 3.7 to 4 and return 5 for inputs 1.2 and 3.7', () => {
    except(calculateNumber('SUM', 1.2, 3.7)).to.deep.equal(5);
  });

  it('should round 1.5 to 2 and 3.7 to 4 and return 6 for inputs 1.5 and 3.7', () => {
    except(calculateNumber('SUM',1.5, 3.7)).to.deep.equal(6);
  });

  // Edge cases
  it('should round negative numbers correctly', () => {
    except(calculateNumber('SUM',-1.4, -3.6)).to.deep.equal(-5);
    except(calculateNumber('SUM',-1.5, -3.7)).to.deep.equal(-5);
  });

  it('should return correct sum when one of the numbers is zero', () => {
    except(calculateNumber('SUM',0, 3.7)).to.deep.equal(-5);
    except(calculateNumber('SUM',1.2, 0)).to.deep.equal(1);
  });
});

// Testing the substraction value
describe('using the SUBTRACT in calculateNumber', () => {
    it('should return the subtraction of two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT',1, 3)).to.deep.equal(2);
    });
  
    it('should round 3.7 to 4 and return 3 for inputs 1 and 3.7', () => {
      expect(calculateNumber('SUBTRACT',1, 3.7)).to.deep.equal(3);
    });
  
    it('should round 1.2 to 1 and 3.7 to 4 and return 3 for inputs 1.2 and 3.7', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.deep.equal(3);
    });
  
    it('should round 1.5 to 2 and 3.7 to 4 and return 6 for inputs 1.5 and 3.7', () => {
      expect(calculateNumber('SUBTRACT',1.5, 3.7)).to.deep.equal(2);
    });
  
    // Edge cases
    it('should round negative numbers correctly and give the substraction', () => {
      expect(calculateNumber('SUBTRACT',-1.4, -3.6)).to.deep.equal(-3);
      expect(calculateNumber('SUBTRACT',-1.5, -3.7)).to.deep.equal(-3);
    });
  
    it('should return correct remainder when one of the numbers is zero', () => {
      expect(calculateNumber('SUBTRACT',0, 3.7)).to.deep.equal(4);
      expect(calculateNumber('SUBTRACT',1.2, 0)).to.deep.equal(-1);
    });
  });

//Testing the dividing the value
describe('calculateNumber', () => {
  it('should return the division of two rounded numbers', () => {
    expect(calculateNumber('DIVIDE',3, 3)).to.deep.equal(1);
  });

  it('should round 3.7 to 4 and return 4 for inputs 3.7 and 1', () => {
    expect(calculateNumber('DIVIDE',3.7, 1)).to.deep.equal(4);
  });

  it('should round 1.2 to 1 and 3.7 to 4 and return 4 for inputs 3.7 and 1.2', () => {
    expect(calculateNumber('DIVIDE', 3.7, 1.2)).to.deep.equal(4);
  });

  it('should round 1.5 to 2 and 3.7 to 4 and return 2 for inputs 1.5 and 3.7', () => {
    expect(calculateNumber('DIVIDE',3.7, 1.5)).to.deep.equal(2);
  });

  // Edge cases
  it('should round negative numbers correctly and get the division correctly', () => {
    expect(calculateNumber('DIVIDE',-3.6, -1.4)).to.deep.equal(4);
    expect(calculateNumber('DIVIDE',-3.7, 1.5)).to.deep.equal(-2);
  });

  it('should return correct division value when one of the numbers is zero', () => {
    expect(calculateNumber('DIVIDE',0, 3.7)).to.deep.equal(0);
    expect(calculateNumber('DIVIDE',1.2, 0)).to.deep.equal('Error');
  });
});
