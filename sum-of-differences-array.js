/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

function sumOfDifferences(arr) {
    //Check if array is ok for calculations
    if(arr === null || arr.lenght < 2){
        //Return 0 if not
        return 0
    //Else    
    } else {
        //Declare varibale to hold sum value
        let sum = 0
        //Sort the array in descending order
        arr = arr.sort((a,b) => b - a)
        //Initialize for loop, without the last iteration
        for(i=0; i<arr.length-1; i++){
            //Sum the diference between the two desired elements
            sum += (arr[i] - arr[i+1])
        }
        //Return the sum variable
        return sum
    }
}