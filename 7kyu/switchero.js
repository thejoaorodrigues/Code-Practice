/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'


*/

function switcheroo(x){
    console.log(x)
    let output = x.split('').map(element => {
      if(element === 'a'){
        return 'b'
      } else if (element === 'b'){
        return 'a'
      } else {
        return element
      }
    })
    return output.join('')
  }