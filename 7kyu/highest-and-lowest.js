/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers){
    // ...
    //Pass numbers to array, and sort the array in ascending order
    numbers = numbers.split(' ').sort((a,b) => a - b)
    //Declare an aray to hold the numbers, and pass the last element, and the first one
    let highLow = [numbers[numbers.length-1], numbers[0]]
    //Join highLow as a string
    return highLow.join(' ')
  }