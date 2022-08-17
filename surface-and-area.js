/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

function getSize(width, height, depth){
    //The box migth not be a box, so 2 faces always equals each other
    return [width*height*2+width*depth*2+height*depth*2, width*height*depth]
  }
  
  