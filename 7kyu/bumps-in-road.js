/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/

function bump(x){
    //Filter the array of digits in search for bumps
    let bumps = x.split('').filter(element => {
      return element === 'n'
    })
    //If bumps <= 15, car is safe
    return bumps.length <= 15 ? 'Woohoo!' : 'Car Dead'
  }