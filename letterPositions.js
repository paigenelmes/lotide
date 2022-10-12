const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letters = sentence[i];
    //If the letters are not an empty space, then we will carry on
    if (letters !== " ") {
      //If the array exists, we need to push the position into the result. If not, we need to create a new array.
      if (results[letters]) {
        results[letters].push(i);
      } else {
        results[letters] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;