/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise
*/

function greet (name, owner) {
    // Add code here
    //Check if owner = name, and print the correct string
    return name === owner ? "Hello boss" : "Hello guest"
}