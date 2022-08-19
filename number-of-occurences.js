/*
Write a function that returns the number of occurrences of an element in an array.

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;
*/

Array.prototype.numberOfOccurrences = function(element) {
    //Declare coutner to 0
    let counter = 0;
    //For each element
    for (i=0; i<this.length; i++){
        //If it equals
        if (this[i] === element){ 
            //Increment the counter
            counter++; 
        }
    }
    //And return the counter
    return counter;
}