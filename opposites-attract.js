/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren'
*/

function lovefunc(flower1, flower2){
    // moment of truth
    //Check if one of the flowers has odd petals and the other has even ones.
    //Return true or false accordingly
    return (flower1%2 === 0 && flower2%2 === 1) || (flower2%2 === 0 && flower1%2 === 1) ? true : false
}