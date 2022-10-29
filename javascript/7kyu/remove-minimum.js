/*
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

function removeSmallest(numbers) {
    //Declare duplicated and slice the whole array of numbers, so to not mutate it
    let duplicated = numbers.slice(0)
    //Declare minimum value, and assign to the first element of duplicated
    let minimum = duplicated[0]
    //For each element of duplicated
    duplicated.forEach(element => {
        //If element is less than minimum
        if (element < minimum){
            //Assign minimum to that element
            minimum = element
        }
    })
    //Declare removed and splice the duplicated array at the index
    let removed = duplicated.splice(duplicated.indexOf(minimum), 1)
    //Return the remaining of the array
    return duplicated
}