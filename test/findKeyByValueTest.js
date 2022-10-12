const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

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