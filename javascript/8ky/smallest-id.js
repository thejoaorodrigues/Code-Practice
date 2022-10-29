/*
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/

function nextId(ids){
    //this will be awesome!
    //Sort the array
    ids.sort((a, b) => a - b)
    //Declare new array to hold singular values
    let singular = []
    //For each value
    ids.forEach(element => {
      if(!singular.includes(element)){
        //Push to the singular array the values that are not already in use
        singular.push(element)
      }
    })
    //Declare a variable current to compare
    let current = 0
    //For each iteration
    for(i=0; i<singular.length; i++){
        //Check if the index at singular is equal to curret
      if (singular[i] !== current){
        //Return the current if it isn't the same
        return current
      }
      //Increment current
      current++
    }
    //Else, return the next value of the highest of the array
    return singular.length
}