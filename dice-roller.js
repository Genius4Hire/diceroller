// return a list of d6 dice rolls in an array
const rollD6 = function(rolls) {
  // prepare an empty array...
  let result = [];
  // loop through the number of requested rolls..
  for (let i = 0; i < rolls; i++) {
    // add the result of a roll to the array..
    result.push(Math.floor(Math.random() * 6) + 1);
  }
  // return the list of rolls.
  return result;
};

// get the number of roles from the command line..
let rolls = Number(process.argv[2]);
// output the rolls!
console.log(`Rolled ${rolls} dice: ${rollD6(rolls)}`);
