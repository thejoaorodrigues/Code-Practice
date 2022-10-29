/*
mplement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

function isTriangle(a,b,c){
    //Declare an array for the sides
    let sides = [a, b, c]
    //And sort it in descending order
    sides = sides.sort((a,b) => b - a)
    //If the longest side is less than the sum of the other two
    if (sides[0] < sides[1] + sides[2]){
        //Is a triangle
        return true
    //Else    
    } else {
        //Return false
        return false;
    }
}