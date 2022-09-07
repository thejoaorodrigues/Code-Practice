/*
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/

function alphabetWar(fight){
    //return "Let's fight again!";
   //Declare variables to hold values and arrays
   let leftResult = 0
   let rightResult = 0
   let left = ['s', 'b', 'p', 'w']
   let right = ['z', 'd', 'q', 'm']
   fight.split('').forEach(element => {
     if(left.includes(element)){
       leftResult += left.indexOf(element)+1
     } else if (right.includes(element)){
       rightResult += right.indexOf(element)+1
     }
   })
   if(rightResult > leftResult){
     return 'Right side wins!'
   } else if (rightResult < leftResult){
     return 'Left side wins!'
   } else {
     return "Let's fight again!"
   }
 }