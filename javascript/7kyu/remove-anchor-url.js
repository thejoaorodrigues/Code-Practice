/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url){
    // TODO: complete
    //Search for the index of '#'
    let index = url.search('#')
    //If no index, return the url, else, return the desired slice of the url
    return index === -1 ? url : url.slice(0, index)
  }