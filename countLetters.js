const countLetters = function(sentence) {
  let result = {};
  for (let letters of sentence) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  return result;
};

module.exports = countLetters;