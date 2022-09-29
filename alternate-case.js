/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

function alternateCase(s) {
    let words = s.split('').map(element => {
      if(element.toLowerCase() === element){
        return element.toUpperCase()
      } else if (element.toUpperCase() === element){
        return element.toLowerCase()
      } else {
        return element
      }
    })
    return words.join('')
  }