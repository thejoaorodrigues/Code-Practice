/*
Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
Confused? Roll your mouse/tap over here
*/

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
function addLetters(...letters) {
  let sum = 25;
  for (letter of letters)
    sum += alphabet.indexOf(letter) + 1;
  return alphabet[sum % 26];  
}