/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

input: string
output: return object repreenting the count of each character in string 

approach: directly assign and count the value within on intial defintion, inside loop.

plan: 00. define function declaraiton taking one string argument
      01. declare empty auxillary object to hold character counts object.
      02. iterate over split argument string converted to array 
      03. write loop body logic that directly initializes and counts
          reoccuring key values. 
      04. return object. 

Examples:

console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  let charCountObject = {};
  string.split("").map((char) => {
    charCountObject[char] = (charCountObject[char] || 0) + 1;
  });
  return charCountObject
}
console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
