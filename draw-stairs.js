/*
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
*/

function drawStairs(n) {
    // your code here
    //Declare variable to hold the stair string
    let stair = ''
    //Declare a space variable to hold a space sample
    let space = ' '
    //Run a for loop to loop from 0 to n
    for(i=0; i<n; i++){
        //Attach the correct number of spaces to the string stair
        stair += space.repeat(i)
        //If function is on the last element
        if(i === n-1){
            //Only append an 'I'
            stair += 'I'
        //Else
        } else {
            //Append the 'I' and a line break
            stair += 'I\n'
        }
    }
    //Return the stair string
    return stair
}