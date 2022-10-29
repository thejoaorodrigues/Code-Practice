/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/

// return masked string
function maskify(cc) {
    //Pass cc into an array
    cc = cc.split('')
    //Declare mask, and, for every element
    let mask = cc.map((element, index) => {
        //If their index is on the last four digits
        if(cc.length-1-index < 4){
            //Return the element
            return element
        //Else,    
        } else {
            //Return the '#'
            return '#'
        }
    })
    //Pass mask as string
    return mask.join('')
}