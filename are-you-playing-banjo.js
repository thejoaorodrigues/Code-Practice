/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

function areYouPlayingBanjo(name) {
    // Implement function
    //If first character is an R
    if (name[0].toUpperCase() === 'R'){
        //Return positive string
        return `${name} plays banjo`
    } else {
        //Else, return negative string
        return `${name} does not play banjo`
    }
}