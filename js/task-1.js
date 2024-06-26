'use strict'
console.log("-----1st task-----");

function slugify(title) {
  const lowerTitle = title.toLowerCase();
  const splitTitle = lowerTitle.split(" ");
  return splitTitle.join("-");
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

console.log("-----1st task end-----");