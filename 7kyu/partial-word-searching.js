/*
Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

Examples
If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].
*/

function wordSearch(query, seq){
    //your code here
    //filter the array of expressions
    let output = seq.filter(element => {
        //And look for the first expression passed
      return element.toLowerCase().includes(query.toLowerCase())
    })
    //REturn the right content
    return output.length === 0 ? ["Empty"] : output
  }