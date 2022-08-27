/*

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona te
*/

function spinWords(string){
    //TODO Have fun :)
    //Pass the string to a array of words
    string = string.split(' ')
    //For each word
    let output = string.map(element => {
        //If words is bigger than 5 letters
      if(element.length >= 5){
        //REturn the word reversed
        return element.split('').reverse().join('')
        //Else
      } else {
        //REturn the said word
        return element
      }
    })
    //Return the output array as string
    return output.join(' ')
  }