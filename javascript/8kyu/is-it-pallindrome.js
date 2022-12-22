//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    // your code here
    //Check if x in lower case is equal to the reverse string of x in lowercase
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase() ? true : false
}