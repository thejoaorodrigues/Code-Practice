/*
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

var Ghost = function() {
    // your code goes here
    //Declare aray of colors
    let colors = ['white', 'yellow', 'purple', 'red']
    //Return a random color
    this.color = colors[Math.floor(Math.random()*colors.length)]
  };