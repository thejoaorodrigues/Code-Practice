/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
*/

function getNumberFromString(s) {
    console.log(s)
    let output = ""
    for(i=0; i<s.length; i++){
      if(parseInt(s[i]) >= 0){
        output += s[i]
      }
    }
    return +output
  }