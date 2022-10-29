/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org
*/

String.prototype.toJadenCase = function () {
    //...
    //Pass the string object to a variable, and conver to an array
    let prompt = this.split(' ')
    //Declare variable result to get the array of uppercased words
    let result = prompt.map(element => {
        //For each element in the array, get the first character and convert to upper case
        //And append the rest of the element
        return element.charAt(0).toUpperCase()+element.slice(1)
    })
    //Return the result var, converted to string
    return result.join(' ')
};