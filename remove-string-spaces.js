//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    //First, split the string by the spaces; Then, join them attached to one another
    return x.split(' ').join('')
  }