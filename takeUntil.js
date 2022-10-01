//Take until function

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

//Testing

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);