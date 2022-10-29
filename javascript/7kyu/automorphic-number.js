/*
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .
*/

function automorphic(n){
    //your code here
    let squared = Math.pow(n,2).toString()
    let len = n.toString().length
    let comparator = +squared.slice(-len)
    console.log(typeof n, typeof comparator)
    console.log('calc', n, squared.slice(-len))
    if(n === comparator){
      return 'Automorphic'
    } else {
      return 'Not!!'
    }
  }