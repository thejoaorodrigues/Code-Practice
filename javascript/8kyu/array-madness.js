/*
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!
*/

function arrayMadness(a, b) {
    // Ready, get set, GO!!!
    //Check the sum of the squares of a
    const aSum = a.reduce((acc, val) => {
        return acc + Math.pow(val, 2)
    }, 0)
    //Check the sum of the cubes of b
    const bSum = b.reduce((acc, val) => {
        return acc + Math.pow(val, 3)
    }, 0)
    //Return true or false
    return aSum >= bSum ? true : false
}