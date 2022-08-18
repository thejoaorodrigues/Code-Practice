/*
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
This is a modification on the Kata: Array2Binary addition hope you like it
*/

function arr2bin(arr){
    // show me the code
    //Filter the array 
    let filter = arr.filter(element => {
        //to exclude non numerical numbers
        return typeof element === 'number'
    })
    //Reduce the array
    let sum = filter.reduce((acc, val) => {
        return acc+val
    }, 0)
    //And return the sum into a string of base 2
    return sum.toString(2)
}