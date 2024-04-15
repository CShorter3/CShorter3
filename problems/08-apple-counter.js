/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a 
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word 
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.

input: takes object 
output: returns count of object keys containing apple substring 

approach: iterate through object keys checking if key includes apple substring
                ie. consider .includes method. 

plan: define function declaration taking object as argument
      iterate keys of object using for in loop
      write function body: increment count variable if key includes substring
      return count
***********************************************************************/

function appleCounter(appleObj) {
  let appleCount = 0;
  for (let key in appleObj) {
    //console.log(key);
    if (key.toLowerCase().includes('apple')) appleCount++;
  }
  return appleCount;
};


// Example:
let obj = { banana: "yay!" };
console.log(appleCounter(obj)); // => 0

let obj1 = { crabapple: "yum!" };
console.log(appleCounter(obj1)); // => 1

// let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
// appleCounter(obj2); // => 2


// let obj3 = {
//   crabApple: "yum!",
//   honeyApple: "super yum",
//   banana: "yay",
//   bigapple: "NYC"
// };
// appleCounter(obj3); // => 3

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
