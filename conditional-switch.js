/*
n javascript, switch is another condition statement.

switch(n){
  case 1:  
    //code block
    break;
  case 2:
    //code block
    break;
  case ...:
    //code block
    break;

  default:       //default is optional, sometimes it can be omitted
    //code block
                 //The last one does not need break
}
switch is the keyword, n is the variable to switch, case 1 means when n===1, following the ":",you can add some executable statement, with keyword break as termination(if you forgot "break", code will running with case 2, case 3...until a "break" appear),default like else in the if..else statement.

In some cases, use the switch statement to look more clearly than the if..else statement.
*/

function howManydays(month){
    //Case tests for month with 28 or 30 days
    switch (month){
       case 2: return 28
       case 4:
       case 6:
       case 9:
       case 11: return 30
    }
    return 31
  }