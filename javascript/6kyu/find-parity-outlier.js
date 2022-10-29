/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier(integers){
    //your code here
    //Declare two variables to filter the array
    let odd = integers.filter(element => {
        //And filter the odd elements
        return element % 2 !== 0
    })
    let even = integers.filter(element => {
        //And sort the even elements
        return element % 2 === 0
    })
    //Check which array is valid, and returnt he response
    return even.length > 1 ? odd[0] : even[0]
  }