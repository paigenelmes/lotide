const findKeyByValue = function(object, value) {
  for (let key in object) {
    //If an object's key matches the value, return the key
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;