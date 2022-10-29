/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    //Code here
    //Declare an array for the symbols
    let symbols = ['!', '?', '$', '&']
    //Take str, and turn into array
    let words = str.split(' ').map(element => {
        //If element is not a symbol
        if(!symbols.includes(element)){
            //Pass the first letter to the end, and add 'ay'
            return `${element.slice(1)}${element[0]}ay`
        //If is a synmbol      
        } else {
            //Return the element
            return element
        }
    })
    //Return the populated array as string
    return words.join(' ')
}