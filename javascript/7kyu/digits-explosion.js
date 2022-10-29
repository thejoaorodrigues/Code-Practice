/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"
*/

function explode(s) {
    //Declare output string
    let output = ''
    //Split the string of numbers into array
    s.split('').forEach(element => {
        //And for each element, if the element is not 0
      if(element !== '0'){
        //Assign a string that is equal to the element
        let string = element
        //And repeat the string n amout of times
        output += element.repeat(+element)
      }
    })
    console.log(output)
    //Return output string
    return output
  }