/*
Given a number, Find if it is Balanced or not .


*/


function balancedNum(number) {
    let numstr = number.toString();
    let leftside = "";
    let rightside = "";
    if (numstr.length/2 < 1 || numstr.length === 2) { 
      return "Balanced";
    }
    if (numstr.length % 2 === 0) {
      leftside = numstr.slice(0,numstr.length/2-1);
    } else {
      leftside = numstr.slice(0,numstr.length/2);
    }
    rightside = numstr.slice(numstr.length/2+1);
    
    let lefttotal = leftside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
    let righttotal = rightside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
    return (lefttotal === righttotal) ? "Balanced" : "Not Balanced";
  }