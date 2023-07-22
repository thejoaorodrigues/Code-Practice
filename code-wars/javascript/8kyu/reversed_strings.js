// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    //Splits the string into an array of characters
    //Reverses the array
    //Joins the array without spaces into a string
    return str.split('').reverse().join('')
}