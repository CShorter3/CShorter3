/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.

input: takes array of score objects (has two key-value pairs: name, score)
output: returns object 
          note: returned objects containing unique name key and score/total points scored key, 

approach: ideate a key value pair statement using logical or operator to initialize or update score.

plan: 00. define function definition taking taking people object array
      01. initialize empty object
      02. write object assignment statment where unique values are inserted in object and scores are updated
      03. return object

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

function countScores(people) {
  let playerStatsObject = {};
  for (let player of people) {
    // Check if player has a scoring record in returning object. Wheather ther is or isnt, update score.
    playerStatsObject[player.name] = (playerStatsObject[player.name] || 0) + player.score;
  }
  return playerStatsObject;
}

// alternative approach logic:
// define function body and initialize results object
// iterate through argument array checking if player already exists in object
//     a.if player is undefined, insert them.
// update score of curren player 
// return object

// Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
