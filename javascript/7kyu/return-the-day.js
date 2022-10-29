/*
Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
*/

function whatday(num) { 
    // put your code here
    //Declare array with the days of the week
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    //Check condition to see if number is valid
    if (num-1 < days.length && num-1 >= 0){
        //Return the index of the array, minus 1
      return days[num-1]
    } else {
        //Else, return the error string
      return "Wrong, please enter a number between 1 and 7"
    }
  }