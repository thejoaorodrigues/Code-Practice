/*
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values
*/

function toCsvText(array) {
    // good luck
    //Initialize for loop to iterate through the array
    for(i=0; i<array.length; i++){
        //Initialize for loop to iterate through the sub array
        for(j=0; j<array[i].length; j++){
            //If the element is the first element
            if(i===0 && j===0){
                //Do nothing
            //Else, if its the first element of other sub array    
            } else if (j===0){
                //Append a line break to the beggining
                array[i][j] = `\n${array[i][j]}` 
            }
        }
    }
    //Return the array
    return array.join('')
}