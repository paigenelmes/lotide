const findKey = function(object, callback) {
  //Loop over the keys in the object
  for (let key in object) {
    //Setting up a varible for the value
    let value = object[key];
    //If the callback value is true, return the key
    if (callback(value) === true) {
      return key;
      //Otherwise set the key as undefined
    } else {
      key = undefined;
    }
  }
};

module.exports = findKey;