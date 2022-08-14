/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN (pin) {
    //return true or false
    //Declare the array of numbers for comparisson
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    //Split the pin in to an array of elements
    let arr = pin.split('')
    //Delcare anomalies and assign it to 0
    let anomalies = 0
    //For each element of the arr of pin
    arr.forEach(element => {
        //If element is not included in the numbers array
        if(!numbers.includes(element)){
            //Increment the anomalies by 1
            anomalies++
        }
    })
    //If anomalies === 0 and length of array is 4 or 6, then its a valid pin
    if(anomalies === 0 && arr.length === 4 || anomalies === 0 && arr.length === 6){
        //So return true
        return true
    //Else    
    } else {
        //Return false
        return false
    }
}