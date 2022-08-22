/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
    arr = arr.filter(element => element%2 != 0);
    arr = arr.reduce((acc, val) => acc + Math.pow(val, 3), 0);
    return isNaN(arr) ? undefined : arr;
  }