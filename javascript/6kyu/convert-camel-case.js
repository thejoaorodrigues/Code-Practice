/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
    if(str.includes('_')){
      str = str.split('_')
    } else if (str.includes('-')){
      str = str.split('-')
    } else {
      return str
    }
    let output = str.map((element, index) => {
      if(index === 0){
        return element
      } else {
        return `${element[0].toUpperCase()}${element.slice(1, element.length).toLowerCase()}`
      }
    })
    return output.join('')
  }