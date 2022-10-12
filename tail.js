const tail = function(array) {
  let empty = [];
  if (array.length <= 1) {
    return empty;
  } else {
    let tailArray = array.slice(1);
    return tailArray;
  }
};

module.exports = tail;