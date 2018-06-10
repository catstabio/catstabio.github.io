var lowTemp = parseFloat(document.getElementById("lowTemp").innerHTML);
var highTemp = parseFloat(document.getElementById("highTemp").innerHTML);
var speed = document.getElementById("windSpeed").innerHTML;

var avgTemp = (lowTemp + highTemp) / 2; 
var power = Math.pow(speed,0.16);
var chillFactor = 35.74 + (0.6215 * avgTemp) - (35.75 * power) + (0.4275 * avgTemp * power); 
document.getElementById("windChill").innerHTML = Math.round(chillFactor);
