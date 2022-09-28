//Assert Equal Function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Find Key By Value Function

const findKeyByValue = function(object, value) {
  for (let key in object) {
    //If an object's key matches the value, return the key
    if (object[key] === value) {
      return key;
    }
  }
};

//TV Shows example

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//Another TV example

const paigesFavShows = {
  drama: "Succession",
  comedy: "Curb Your Enthusiasm",
  horror: "Squid Game",
  animation: "King of the Hill"
};

//Testing

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(paigesFavShows, "Curb Your Enthusiasm"), "comedy");
assertEqual(findKeyByValue(paigesFavShows, "Succession"), "drama");
assertEqual(findKeyByValue(paigesFavShows, "Squid Game"), "horror");
assertEqual(findKeyByValue(paigesFavShows, "King of the Hill"), "animation");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);