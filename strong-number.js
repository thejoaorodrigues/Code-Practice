/*
Definition
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".
*/

function strong(n) {
    let arr = String(n).split("");
    
    let sum = 0;
    
    function factorial(fnNum){
      if(fnNum <= 1){
        return 1;
      }else{
        return fnNum * factorial(fnNum - 1);
      }
    }
    
    for(let i = 0; i < arr.length; i++){
      sum += factorial(arr[i]);
    }
    
    return n == sum ? "STRONG!!!!" : "Not Strong !!"; 
  }