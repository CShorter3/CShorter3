/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.

input: object -> person
output: return string -> full name

approach: access and concat object values to return full name.
***********************************************************************/

getFullName = (person) => person.firstName + " " + person.lastName;

// Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
console.log(getFullName(p1)); // => 'John Doe'
// let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
// getFullName(p2); // => 'Charlie Brown'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
