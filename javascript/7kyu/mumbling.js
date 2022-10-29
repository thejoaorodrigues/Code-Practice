/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	// your code
    //Split s into an array
    s = s.split('')
    //Declare variable to hold the new String
    let str = ""
    //For each element of the array
    s.forEach((element, index) => {
        //Append to str the element in uppercase
        str += element.toUpperCase()
        //And append to str the element a number of times of its index, in lower case
        str += element.toLowerCase().repeat(index)
        //If its not the last element of the array
        if(index !== s.length-1){
            //Append and '-' to separate
            str += '-'
        }
    })
    //Return the new string
    return str
}