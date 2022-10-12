const countOnly = function(allItems, itemsToCount) {
  //empty object for results
  let results = {};
  //Looping over allItems
  for (let item of allItems) {
    //Increment the counter for each item
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;