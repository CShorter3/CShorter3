/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]

input: object1, object2, string
output: return array of keys -> for both obj arguments corresponding to key requested

approach: push key-values of two objects into an array according to requested argument key
plan: 00. define function declaration + initialize auxillary aux array
      01. write function body
              a. access and push object keys into new arrau

***********************************************************************/

function valuePair(obj1, obj2, key) {
      const element1 = obj[key];
      const element2 = obj[key];

      

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
