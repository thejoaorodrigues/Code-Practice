/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/

function stringClean(s){
    // Function will return the cleaned string
    //Declare numbers arrays
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    //Declare variable to hold the new string
    let output = ""
    //For each letter of string
    for(i=0; i<s.length; i++){
        //Check is not a number
      if(!numbers.includes(s[i])){
        //Append to the string
        output += s[i]
      }
    }
    //return the stting
    return output
  }