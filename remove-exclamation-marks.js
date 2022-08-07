//Write function RemoveExclamationMarks which removes all exclamation marks from a given string

function removeExclamationMarks(s) {
    //Splits the string where a ! is located, and join them together without altering the string
    return s.split('!').join('')
}