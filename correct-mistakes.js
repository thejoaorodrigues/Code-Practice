/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

function correct(string)
{
	// your code here
    //Pass the string to an array
    string = string.split('')
    //Create new array and map it
    let newString = string.map(element => {
        //Loop for the incorrect character
        if(element === '5'){
            //Assign the correct one
            return 'S'
        } else if (element === '0'){
            return 'O'
        } else if (element === '1'){
            return 'I'
        //Else        
        } else {
            //Return the character that is
            return element
        }
    })
    //Return the array joined
    return newString.join('')
}