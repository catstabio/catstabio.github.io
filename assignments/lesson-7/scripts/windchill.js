var(let) highTemp = document.getElementById("highTemp").innerHTML;
var(let) lowTemp = document.getElementById("lowTemp").innerHTML; 
var speed = document.getElementById("windSpeed").innerHTML;

var avgTemp = (highTemp + lowTemp) / 2 
var power = Math.pow(speed,0.16);
var multiply = 0.6125 * avgTemp 
var chillFactor = 35.74 + multiply - (35.75*power) + (0.4275*avgTemp*power); 

