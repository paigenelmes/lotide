const takeUntil = function(array, callback) {
  let result = [];
  for (let i of array) {
    //Finding the break point
    let breakPoint = (callback(i));
    //If we don't hit the break point yet, then push into the result
    if (breakPoint === false) {
      result.push(i);
      //Otherwise if the break point is true, then stop there and return the result
    } else {
      return result;
    }
  }
};

module.exports = takeUntil;



