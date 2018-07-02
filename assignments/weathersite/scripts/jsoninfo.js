 var header = document.querySelector('header');
    var section = document.querySelector('section');
        
    var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
        
    request.onload = function() {
        var tricityInfo = request.response;
        populateHeader(tricityInfo);
        showHeroes(tricityInfo);
    }
    
    function populateHeader(jsonObj) {
        var myH1 = document.createElement('h1');
        myH1.textContent = jsonObj ['towns'];
        header.appendChild(myH1);
    }
        
      function showCityInfo(jsonObj) {
          var triCityTowns = jsonObj['towns'];
          
          for (var i = 0; i < triCityTowns.length; i++) {
              var myPara1 = document.createElement('p');
              var myPara2 = document.createElement('p');
              var myPara3 = document.createElement('p');
              var myPara4 = document.createElement('p');
              
              
              myH2.textContent = triCityTowns[i].name;
              myPara1.textContent = 'Motto: ' + triCityTowns[i].motto;
              myPara2.textContent = 'Year Founded: ' + triCityTowns[i].yearFounded;
              myPara3.textContent = 'Current Population:' + triCityTowns[i].currentPopulation;
              myPara4.textContent = 'Average Rainfall:' + triCityTowns[i].averageRainfall;
              
              }
              
              myArticle.appendChild(myPara1);
              myArticle.appendChild(myPara2);
              myArticle.appendChild(myPara3);
              myArticle.appendChild(myPara4);
            
          }
       
    