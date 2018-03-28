'use strict';


const testArray = ['1', '2', '3', '4'];

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// This for loop calls everything in the string of the length in testArray
for (let i = 0; i < testArray.length; i++) {
  // console.log(testArray[i]);
}

// This WHILE loop is doing the same thing as the FOR loop above.
let j = 0;
while (j < testArray.length) {
// console.log(testArray[j]);
  j++;
}
// The FOR each method is the same as the work in FOR loop function.

const newArray = [];

testArray.forEach(function(element) {
  const result = element + 1;
  newArray.push(result);
  // console.log(result);
});

console.log(newArray);

const newerArray = test.Array.map(function(elem) {
return elem +1;
});

console.log(newerArray);