/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

input: takes string array
output: returns object representing the count of each value in the array

notes: array value corresponds to object key | array[i] <--> key
                                             | array[i] occurences <--> object[key]

approach: translate corresponding array values from array form to object for, tracking count of key occurences

plan: 00. define function declaration taking array as parameter
      01. initialize auxillary object space to push converted array indexes into 
              a. handle counting in initialization
      02. write function body, iterating over array values
              a. initialize keyCount to logical boolean where keyCount is checked for truth
                 otherwise keyCount is already in object and incremeted in count + 1.
      03. return object

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}

***********************************************************************/

function arrayConverter(array) {
  let toObject = {};
  for (let key of array) {
    toObject[key] = (toObject[key] || 0) + 1;
    //console.log(toObject);
  }
  return toObject;
}

// ALTERNATIVE APPROACH: while iterating, have an inner loop checking value of key against all existing objects
// if it exists, increment count. if it does not exists, initialize then increment count. 

console.log(arrayConverter(["apple", "apple", "papaya"])); // => {apple: 2, papaya: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
