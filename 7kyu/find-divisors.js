/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/


function divisors(integer) {
    //Declare an array to hold the divisors
    let divisors = []
    //Initialize for loop at 2
    for(i=2; i<integer; i++){
        //If integer is divisible by i
        if(integer%i === 0){
            //Push i to divisors
            divisors.push(i)
        }
    }
    //Control to check for the return
    return divisors.length === 0 ? `${integer} is prime` : divisors
};