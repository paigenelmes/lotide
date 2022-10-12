const middle = function(originalArray) {
  let middleArray = [];
  let arrayLength = originalArray.length;
  //If arrays have more than 2 elements and are odd numbers, return an array with a single middle element
  if ((arrayLength % 2 !== 0) && (arrayLength > 2)) {
    let middleIndex = Math.floor(arrayLength / 2);
    middleArray = [originalArray[Math.floor(middleIndex)]];
    //If arrays have more than 2 elements and are even numbers, return an array with 2 middle elements
  } else if ((arrayLength % 2 === 0) && (arrayLength > 2)) {
    let middleIndex = Math.floor(arrayLength / 2);
    middleArray = [originalArray[Math.floor(middleIndex - 1)], originalArray[Math.floor(middleIndex)]];
    //If arrays less than 2 elements, return an empty array
  } else {
    middleArray = [];
  }
  return middleArray;
};

module.exports = middle;