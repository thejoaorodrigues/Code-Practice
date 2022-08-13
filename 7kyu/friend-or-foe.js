/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

function friend(friends){
    //your code here
    //Declare variable result and filter the array
    let result = friends.filter(element => {
        //where is pushed to the array if element has 4 letter
        return element.length === 4
    })
    //Return the array
    return result
}