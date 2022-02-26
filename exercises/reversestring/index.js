// #1
// function reverse(str = "") {
//   return str.split("").reverse().join("");
// }

// #2
// function reverse(str = "") {
//   let result = [];

//   for (let i = str.length; i >= 0; i--) {
//     result.push(str[i]);
//   }

//   return result.join("");
// }

// #3
// function reverse(str = "") {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// #4
function reverse(str = "") {
  debugger;
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

reverse();

module.exports = reverse;
