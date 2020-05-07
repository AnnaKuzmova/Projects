
function clock() {

var hours = document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");

var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;

}

var interval = setInterval(clock,1000);