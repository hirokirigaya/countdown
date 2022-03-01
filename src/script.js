let timerhtml = document.getElementById("timer");
var duration = new Date("Jan 1, 2023 00:00:00").getTime();

let contador = setInterval(function () {
  distance = duration - new Date().getTime();
  var day = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (distance < 0) {
    clearInterval(contador);
    return  document.getElementById('timer').innerHTML = '00:00:00:00'; 
  }
  timerhtml.textContent =
    day.toString().padStart(2, "0") +
    ":" +
    hour.toString().padStart(2, "0") +
    ":" +
    minute.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
}, 1000);
