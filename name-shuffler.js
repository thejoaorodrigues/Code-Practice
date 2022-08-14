/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

function nameShuffler(str){
    //Shuffle It
    //Pass to string the words, reverse array, and join them with space
    return str.split(' ').reverse().join(' ')
}