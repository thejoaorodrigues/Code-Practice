/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)


*/

function humanReadable(seconds) {
    if ( seconds < 0 || seconds > 360000 ) {
      return null;
    }
  
    var hours = Math.floor( seconds / 3600 );
    seconds -= hours * 3600;
    if ( hours < 10 ) {
      hours = '0' + hours;
    }
  
    var minutes = Math.floor( seconds / 60 );
    seconds -= minutes * 60;
    if ( minutes < 10 ) {
      minutes = '0' + minutes;
    }
  
    if ( seconds < 10 ) {
      seconds = '0' + seconds;
    }
  
    return hours + ':' + minutes + ':' + seconds;
}