let request = new XMLHttpRequest();
let requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
request.open('Get', requestURL, true);
request.responseType = 'json';
request.send();

request.onload = function() {
    let townData = JSON.parse('{"motto":"Where you will grow!"}');
    document.getElementById('motto').innerHTML = townData.motto;
}