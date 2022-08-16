/*
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

function SeriesSum(n){
    // Happy Coding ^_^
    //Declare initial result
    let result = 0
    //Declare the first base for calculations
    let base = 4
    //Initialize for loop
    for(i=0; i<n; i++){
        //If we're at the first element
        if(i === 0){
            //Increment result by one
            result += 1
        //Else
        } else {
            //Add the correct base 
            result += Number(`${1/base}`)
            //And increment the base for the next calculation
            base += 3
        } 
    }
        //Return the number with 2 decimal places, and in string format
        return Number(result).toFixed(2).toString()
}