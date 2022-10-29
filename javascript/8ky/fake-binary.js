/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x){
    //Pass the number to a string, and to an array
    x = String(x).split('')
    //Using the map method
    let binary = x.map(element =>{
        //Check if element is < 5
        if (element < 5){
            //And return 0
            return 0
        //Or check if is >= 5    
        } else if (element >= 5)
            //And return 1    
            return 1
    })
    //Return the binary var as a string
    return binary.join('')
}