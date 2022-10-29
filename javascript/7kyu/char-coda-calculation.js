/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/



function calc(x){
    //Declare variables for output string and result
    let output = ""
    let result = 0
    //For each letter in string
    for(i=0; i<x.length; i++){
        //Append the char code to output
        output += String(x.charCodeAt(i))
    }
    //For loop initialized
    for(i=0; i<output.length; i++){
        //If number is a 7
        if(output[i] === '7'){
            //Add 6 (its the difference between 7-1) to result
            result += 6
        }
    }
    //Return result
    return result
}