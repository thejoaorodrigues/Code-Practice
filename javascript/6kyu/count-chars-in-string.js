/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (string) {  
    // The function code should be here
    let output={};
    string.split('').map(element => output[element] = output[element]+1 || 1)
    return output;
  }