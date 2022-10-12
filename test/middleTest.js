const middle = require('../middle');
const assert = require('chai').assert;
//const assertArraysEqual = require('../assertArraysEqual');

//Testing
describe("#middle", () => {
  it("Should return an empty array when given an array with only one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("Should return an empty array when given an array with only two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("Shouuld return [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("Should return [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("Should return [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("Should return [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("Should be equal", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), middle([1, 2, 3, 4, 5, 6]));
  });
});