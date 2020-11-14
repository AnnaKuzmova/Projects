$(document).ready(function(){

 $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Plovdiv,bg&units=metric&APPID=5bf1498fa703b963f4a0dfc24b54ff29", function(data){
    
    let article = document.createElement('article');
    article.classList.add('f-box');

    let image = document.createElement('img');
    image.setAttribute('src', `http://api.openweathermap.org/img/w/${data.weather[0].icon}.png`);
    article.appendChild(image);

    let pDay = document.createElement('p');
    pDay.classList.add('day');
    let currentDay = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let textDay = document.createTextNode(days[currentDay.getDay()]);
    pDay.appendChild(textDay);
    article.appendChild(pDay);

    let temp = document.createElement('p');
    temp.classList.add('temp');
    let tempTetx = document.createTextNode(data.main.temp);
    temp.appendChild(tempTetx);
    article.appendChild(temp);

    let desc = document.createElement('p');
    let descTetx = document.createTextNode(data.weather[0].description);
    desc.appendChild(descTetx);
    article.appendChild(desc);

    $('.f-holder').append(article);

 });
 
 $('.check').click(function(e){
     e.preventDefault();
     $('.f-holder').empty();
    let city = $('#city-weather-options').val();

    $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city},bg&units=metric&APPID=5bf1498fa703b963f4a0dfc24b54ff29`, function(data){
    
    let article = document.createElement('article');
    article.classList.add('f-box');

    let image = document.createElement('img');
    image.setAttribute('src', `http://api.openweathermap.org/img/w/${data.weather[0].icon}.png`);
    article.appendChild(image);

    let pDay = document.createElement('p');
    pDay.classList.add('day');
    let currentDay = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let textDay = document.createTextNode(days[currentDay.getDay()]);
    pDay.appendChild(textDay);
    article.appendChild(pDay);

    let temp = document.createElement('p');
    temp.classList.add('temp');
    let tempTetx = document.createTextNode(data.main.temp);
    temp.appendChild(tempTetx);
    article.appendChild(temp);

    let desc = document.createElement('p');
    let descTetx = document.createTextNode(data.weather[0].description);
    desc.appendChild(descTetx);
    article.appendChild(desc);

    $('.f-holder').append(article);

 });

    
 });
  
});