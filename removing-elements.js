/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr){
    //your code here
    //Declare newArr variable to hold the new array to be returned
    let newArr = []
    //With arr.map
    arr.map((element, index) => {
        //Only check the elements where their index is divisible by 2
        if (index%2 === 0){
            //Push those elements to newArr
            newArr.push(element)
        }
    })
    //Return the new array
    return newArr
}