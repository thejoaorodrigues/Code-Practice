/*
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of tea
*/

function rowWeights(array){
    //your code here
    //Declare group 1 and two
    //Filter for each index
    let groupOne = array.filter((element, index) => {
        //If its even, filter for the right group
        return index%2 === 0
    //Then, reduce the group
    }).reduce((acc, val) => {
        //so it returns the sum of all elements
        return acc+val
    },0)
    let groupTwo = array.filter((element, index) => {
        return index%2 === 1
    }).reduce((acc, val) => {
        return acc+val
    }, 0)
    //Return the two teams as array
    return [groupOne, groupTwo]
}