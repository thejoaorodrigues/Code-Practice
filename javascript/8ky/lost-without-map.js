/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

function maps(x){
    //x.map() will give us a new array with each value doubled
    const xDouble = x.map(element => element*2)
    //Return the array created above
    return xDouble
}