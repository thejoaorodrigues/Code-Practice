/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
    // code away
  let output = ''
  name = name.split(' ')
  for(let i = 0; i < name.length; i++){
    output += name[i][0].toUpperCase()
    if (i == 0) {
      output += '.'
    }
  }
  return output
}