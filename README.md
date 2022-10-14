# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me, Paige Nelmes, as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @paige.nelmes/lotide`

**Require it:**

`const _ = require('@paige.nelmes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: A function that takes in two arrays(actual and expected). If the actual array is equal to the expected array, it will pass the assertion.

* `assertEqual`: A function that takes in two pieces of data(actual and expected). For this function, only primitive data types (numbers, strings, etc) will work. If the actual data is equal to the expected data, it will pass the assertion.

* `assertObjectsEqual`: A function that two objects(actual and expected). If the actual object is strictly equal to the expected object, it will pass the assertion.

* `countLetters`: A function that takes in a string and returns an object containing the number of times each letter appears in that string. 

* `countOnly`: A function that takes in two items, an array(allItems) and an object(itemsToCount). It will return an object that tallys up the instances of a specfic subset of those items. Only keys that have a truthy value will be counted in the resulting object.

* `eqArrays`: A function that takes in two arrays(actual and expected). If both arrays are equal in both length and content, it will return true.

* `eqObjects`: A function that compares two objects and returns true if they are equal and false if they are not. Both objects must have equal lengths and equal key value pairs to be considered equal. (Note: if each object's key value pairs are identical, but are listed in a different order, this function will still return true.)

* `findKey`: A function that takes in an object and a callback function. It will scan the object and return the first key for which the callback returns a truthy value. If no key is found, it returns undefined.

* `findKeyByValue`: A function that takes in an object and a value and returns the first key containing the given value. If no key with the given value can be found, it will return undefined.

* `flatten`: A function that takes in a nested array and returns one flattened array.

* `head`: A function that takes in an array and returns the head(first element) of that array.

* `letterPositions`: A function that takes in a string and returns an object with the positions of each character. The keys in this object are each character in the string and the values are an array of the index(es) of each character. (Note: If the character appears more than once, multiple indexes will be shown in the value array.)

* `map`: A function that takes in an array and a callback function. It will return a new array based on the results of the callback function.

* `middle`: A function that takes in an array and returns a new array containing the items in the middle of original array. If the array contains an odd number of items, it will return an array with a single middle item. If the array contains an even number of items, it will return an array with two middle items. If the array contains only one or two elements, it will return an empty array. 

* `tail`: A function that takes in an array and returns the tail(last element) of that array.

* `takeUntil`: A function that takes in an array and a callback function. The function will return a slice of the array with the elements taken from the beginning and will keep going until the callback function returns a truthy value.

* `without`: A function that takes in two arrays(source and itemsToRemove). If there are matching items in these arrays, it will remove them and return a new array without the matching items.