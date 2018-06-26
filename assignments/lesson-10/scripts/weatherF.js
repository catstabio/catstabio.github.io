let weatherRequest = new XMLHttpRequest();
let apiURL = "https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=88912f95da0c26e69d60ea8f812d73e1";
weatherRequest.open("GET", apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    //console.log(weatherData);
    document.getElementById('current-tempF').innerHTML = weatherData.main.temp;
    document.getElementById('weatherDescriptionF').innerHTML = weatherData.weather.description;
    document.getElementById('windSpeedF').innerHTML = weatherData.wind.speed;
    let imagesrc = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    document.getElementById('weatherimage').src = imagesrc;
}