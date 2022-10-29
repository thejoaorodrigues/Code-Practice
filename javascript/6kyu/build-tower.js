/*
Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :)
*/

function towerBuilder(nFloors) {
    // build here
    let base = nFloors*2-1
    let hash = '*'
    let space = ' '
    let output = []
    for(i=1; i<=nFloors; i++){
      let current = i*2-1
      let spaceCounter = base-current
      console.log(current, spaceCounter)
      let string = `${space.repeat(spaceCounter/2)}${hash.repeat(current)}${space.repeat(spaceCounter/2)}`
      output.push(string)
    }
    return output
  }