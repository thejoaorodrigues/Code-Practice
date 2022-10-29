/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
    //...
    //1st, pass n to string and to an array
    //2nd, sort the array in descending order
    //3rd, join the array as a string
    n = n.toString().split('').sort((a,b) => b - a).join('')
    //Pass n to a number again and return
    return Number(n)
  }