//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    // your code........
    //If number is even, multiply it by 8, multiply it by 9 if its odd
    return number%2 === 0 ? number*8 : number*9
}