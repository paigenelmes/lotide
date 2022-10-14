const eqArrays = require('../lotide/eqArrays');

//Equal Objects function

//Returns true if both objcts have identical keys & values
//Otherwise you get false

const eqObjects = function(object1, object2) {
  //Variables for length of each object
  const object1Length = Object.keys(object1).length;
  const object2Length = Object.keys(object2).length;
  //Variable for object 1 keys
  const object1Keys = Object.keys(object1);
  //If the object lengths are not equal, return false
  if (object1Length !== object2Length) {
    return false;
    //Otherwise loop over the keys of object1
  } else {
    for (let keys of object1Keys) {
      //if both values are an array, pass them to the equal arrays function
      if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
        return eqArrays(object1[keys], object2[keys]);
        //Comparing object key values. If not equal, return false
      } else if (object1[keys] !== object2[keys]) {
        return false;
      }
    }
  }
  //Return true at the end if none of these return false
  return true;
};

module.exports = eqObjects;