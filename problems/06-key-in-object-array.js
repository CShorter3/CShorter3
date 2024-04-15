/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of 
objects as the first parameter and a string as the second. The `keyInObjectArray` 
will return `true` if any of the objects contains the `keyString` as a key within them, and 
`false` if not.

input: object array, string
output: return boolean -> true if any object keys equal string

approach: iterate object, checking if any object key equals string variable

plan: 00. define function body
      01. write function body
              a. loop over items accessing each objects key variable to check
                 if its equal to string.
              b. if it is equal, return true
      02. return false

Examples:


keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

/********  Approach 1  ********/
// function keyInObjectArray(objArray, keyString) {
//   let objKeys;
//   for (let obj of objArray) {
//     objKeys = Object.keys(obj);
//     console.log(objKeys);
//   }

//   for (let key of objKeys) {
//     if (key === keyString) {
//       return true;
//     }
//   }
  
//   return false;
// }

/********  Approach 2 ********/
const keyInObjectArray = ((objArray, keyString) => { 

  return objArray.some(obj => keyString in obj);

});


let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];


console.log(keyInObjectArray(objArray, 'planet')); // => true

// self study notes
// Object.keys Retrieves keys from object not array.
// to get keys of each object within the array, iterate over array then call.
// Question: How would you check if values exist in key string?
//        loop over array, calling object.values, checking if
//        values inclues keyString. 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
