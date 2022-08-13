/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

function stringy(size) {
    // your code here
    //Declare string variable to hold the string
    let string = ""
    //For each number until size
    for(i=0; i<size; i++){
        //If number is even
        if(i%2 === 0){
            //Appednd '1' to th string
            string += '1'
        //Else
        } else {
            //Append '0'
            string += '0'
        }
    }
    //Return the string
    return string
}