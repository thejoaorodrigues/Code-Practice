/*
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
*/

function add(num1, num2) {
    let arr1 = num1.toString().split('').reverse()
    let arr2 = num2.toString().split('').reverse()
    let arr3 = []
    for(let i=0; i < (arr1.length < arr2.length ? arr2.length : arr1.length); i++) {
      arr3.push((parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0))
    }
    return parseInt(arr3.reverse().join(''));
  }