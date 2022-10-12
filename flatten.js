const flatten = function(originalArray) {
  let flatArray = [];
  if (Array.isArray(originalArray)) {
    flatArray = originalArray.flat();
  }
  return flatArray;
};

module.exports = flatten;