/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
    //1st - world.split('') => ['w', 'o', 'r', 'l', 'd']
    //2nd - ['w', 'o', 'r', 'l', 'd'].reverse() => ['d', 'l', 'r', 'o', 'w']
    //3rd - ['d', 'l', 'r', 'o', 'w'].join('') => dlrow
    return str.split('').reverse().join('')
  }