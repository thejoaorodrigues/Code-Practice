/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    // your code
    //Declare string and conncat s1 and s2
    let string = s1+s2
    //Declare uniques array to hold the unique values
    let uniques = []
    //For each value of string
    string.split('').forEach(element => {
        //If value is not present in uniques
        if(!uniques.includes(element)){
            //Push it to uniques array
            uniques.push(element)
        }
    })
    //Return uniques sorted, and joined as string
    return uniques.sort().join('')
}