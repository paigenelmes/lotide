const assertEqual = require('../assertEqual');
const head = require('../head');

//Test code
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));
assertEqual(head([1]), 1);
assertEqual(head(["Paige", "David"]), "Paige");