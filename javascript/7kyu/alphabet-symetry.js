/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!
*/

function solve(arr){  
    //code
    //DEfine the alphabet
      let alphabet = "abcdefghijklmnopqrstuvwxyz"
      //Declare array to hold the counter values
      let output = []
      //For each word of the array
      for(i=0; i<arr.length; i++){
        //Declare and assign counter to 0 at the beggining
        let counter = 0
        //Split the word into an array of letters
        arr[i].split('').forEach((element, index) => {
            //If the index of the word is equal to the index in the alphabet
          if (index === alphabet.indexOf(element.toLowerCase())){
            //Increment counter
            counter++
          }
        })
        //Push counter to the output array at the end of the word cycle
        output.push(counter)
      }
      //Return the output array
      return output
    };