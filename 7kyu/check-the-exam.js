/*
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

function checkExam(array1, array2) {
    // good luck
    //Declare grade and assign it to 0
    let grade = 0
    //For each element of array2
    array2.forEach((element, index) => {
        //If element is equal to the index of array 1
        if (element === array1[index]){
            //Add 4
            grade += 4
        //If its empty
        } else if (element === ''){
            //Don't add anything
            grade += 0
        //Else,
        } else {
            //Subtract one
            grade += -1
        }
    })
    //If grade is negative, just return 0 . Else, return the grade
    return grade < 0 ? 0 : grade
}            