//Requirements
const tail = require('../tail');
const assert = require('chai').assert;

//Variables for testing
const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];

//Testing
describe("#tail", () => {
  it("The tail of the result variable should be equal to the tail of the array", () => {
    assert.deepEqual(tail(result), tail(["Lighthouse", "Labs"]));
  });
  it("An array with one element should be equal to an empty array", () => {
    assert.deepEqual(tail(["Paige"]), []);
  });
  it("An empty array should be equal to an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
  it("The length of the words array should be equal to 3", () => {
    assert.deepEqual(tail[words.length], tail[3]);
  });

});