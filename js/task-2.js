'use strict'
console.log("-----2nd task-----");

function makeArray(firstArray, secondArray, maxLength) {
  //massif connect first and second Array
  totalArray = firstArray.concat(secondArray);
  //if numbers elements bigger maxLength, return limits massif
  if (totalArray.length >= maxLength) {
    return totalArray.slice(0, maxLength);
  }
  //returns whole massif
  else {
    return totalArray;
  }
}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []g

console.log("-----2nd task end-----");