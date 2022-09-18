/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
    console.log(str, str.length)
    let output = []
    str = str.split('')
    for(i=0; i<str.length; i+=2){
      if(str[i+1]){
        output.push(str[i]+str[i+1])
      } else {
        output.push(str[i]+'_')
      }
    }
    return output
  }