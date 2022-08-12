/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str){
    //...
    //Declare alert variable, that is going to tell us if string has more that one letter of the same kind
    let alert = 0
    //Pass the string to an array
    str = str.split('')
    //Declare checker array, where we're going to hold character for comparison
    let checker = []
    //For each element of str
    str.forEach(element => {
        //If the element, in lower case, is included in checker
        if (checker.includes(element.toLowerCase())){
            //Increment alert (more than one char)
            alert += 1
        //Else    
        } else {
            //Push the lower case element to checker for the next loop
            checker.push(element.toLowerCase())
        }
    })
    //If alert > 0, there is more than one character, so trigger false, else, return true
    return alert > 0 ? false : true
}