// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA = "", stringB = "") {
    const s2HasS1 = stringA
        .split("")
        .every((letter) => stringB.includes(letter));
    const s1HasS2 = stringB
        .split("")
        .every((letter) => stringA.includes(letter));

    return s2HasS1 && s1HasS2;
}

module.exports = anagrams;
