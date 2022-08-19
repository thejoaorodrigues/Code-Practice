/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/

function getDrinkByProfession(param){
    //Declare the two arrays with prompts
    let input = ["Jabroni", "School Counselor", "Programmer", "Bike Gang Member", "Politician", "Rapper"]
    let output = ["Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal"]
    //Split the param
    param = param.split(' ')
    //And for each word in the parameter
    let string = param.map(element => {
        //Format it
      return element[0].toUpperCase().concat(element.slice(1).toLowerCase())
    })
    //Join as a single paramater
    string = string.join(' ')
    //Return the output of the index of the parameter passed
    return output[input.indexOf(string)] ? output[input.indexOf(string)] : 'Beer'
  }