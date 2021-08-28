var seconds=60;
var timer;
function myFunction() {
  if(seconds < 60) { // I want it to say 1:00, not 60
    document.getElementById("demo").innerHTML = seconds;
  }
  if (seconds >0 ) { // so it doesn't go to -1
     seconds--;
  } else {
     clearInterval(timer);
     alert("OUT OF TIME!");
  }
}

document.getElementById("demo").innerHTML="Time: 60";