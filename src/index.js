import './style.css';
import cloudy from './icons/weather-cloudy.svg';
import lightning from './icons/weather-lightning.svg';
import night from './icons/weather-night.svg';
import partly_cloudy from './icons/weather-partly-cloudy.svg';
import pouring from './icons/weather-pouring.svg';
import snowy_rainy from './icons/weather-snowy-rainy.svg';
import rainy from './icons/weather-rainy.svg';
import snowy from './icons/weather-snowy.svg';
import sunny from './icons/weather-sunny.svg';
import windy from './icons/weather-windy.svg';
import cloudyBackground from './backgrounds/cloudyBackground.jpg';
import partlycloudyBackground from './backgrounds/partlycloudyBackground.jpg';
import pouringBackground from './backgrounds/pouringBackground.jpg';
import rainyBackground from './backgrounds/rainyBackground.jpg';
import snowyBackground from './backgrounds/snowyBackground.jpg';
import sunBackground from './backgrounds/sunBackground.jpg';
import thunderBackground from './backgrounds/thunderBackground.jpg';
import windyBackground from './backgrounds/windyBackground.jpg';
import printMe from './print.js';

const dropdownButton = document.querySelector('.dropbtn');
dropdownButton.onclick = () => {showSelections();}

function showSelections() {
      document.getElementById("drop").classList.toggle("show");
 }
 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }}}}

const zipCode = document.getElementById('zipcode');
const city = document.getElementById('city');

zipCode.onclick = () => searchZip();
city.onclick = () => searchCity();

function searchZip () {
   dropdownButton.innerText = "Zip Code:"
}

function searchCity () {
   dropdownButton.innerText = "City:"
}

let confirmBtn = document.querySelector('.confirm')
confirmBtn.onclick = async () => {
   if (dropdownButton.innerText == 'Zip Code:') {
      let zipValue = document.getElementById('search').value;
      console.log(zipValue);
      let weather = await getWeatherDataZip(zipValue)
   } else if (dropdownButton.innerText == 'City:') {
      let cityValue = document.getElementById('search').value;
      let weather = await getWeatherDataCity(cityValue)
   } else dropdownButton.style.backgroundColor = 'red';
   }

async function getWeatherDataCity(city) {
   let unit = 'imperial'
   let weather = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7100239e64c481b759f7889a357558f4&units=${unit}`, {mode: 'cors'});
   let weatherData = await weather.json();
   getForecast(weatherData.coord.lat, weatherData.coord.lon);
   displayWeather(weatherData);
}



async function getWeatherDataZip(zip) {
   let getCoors = await fetch (`http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=7100239e64c481b759f7889a357558f4`, {mode: 'cors'});
   let coorData = await getCoors.json();
   let lattitute = coorData.lat;
   let longitude = coorData.lon;
   getForecast(lattitute, longitude);
   let unit = 'imperial'
  let weatherCall = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lattitute}&lon=${longitude}&appid=7100239e64c481b759f7889a357558f4&units=${unit}`, {mode: 'cors'});
  let weatherData = await weatherCall.json();
  console.log(weatherData);
  displayWeather(weatherData);
}

async function getForecast (lat, lon) {
   let unit = 'imperial'
  let forecastCall = await fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7100239e64c481b759f7889a357558f4&units=${unit}`, {mode: 'cors'});
  let forecastData = await forecastCall.json();
  console.log(forecastData);
  displayForecast(forecastData)
}
 
function displayForecast(data) {
   const container = document.getElementById('forecast')
   const day1 = document.getElementById('day1')
   const day2 = document.getElementById('day2')
   const day3 = document.getElementById('day3')
   const day4 = document.getElementById('day4')
   const day5 = document.getElementById('day5')
  
   let day1Temp = [];
   for (let i = 0; i < 8; i++) {
      day1Temp[i] = (data.list[i].main.temp);
   }
   const max1 = day1Temp.reduce((a, b) => Math.max(a, b), -Infinity);
   const min1 = day1Temp.reduce((a, b) => Math.min(a, b))
   day1.firstElementChild.innerText = `${max1}°F`;
   day1.lastElementChild.innerText = `${min1}°F`;

   let day2Temp = [];
   for (let i = 8; i < 16; i++) {
      day2Temp[i] = (data.list[i].main.temp);
   }
   const max2 = day2Temp.reduce((a, b) => Math.max(a, b), -Infinity);
   const min2 = day2Temp.reduce((a, b) => Math.min(a, b))
   day2.firstElementChild.innerText = `${max2}°F`;
   day2.lastElementChild.innerText = `${min2}°F`;

   let day3Temp = [];
   for (let i = 16; i < 24; i++) {
      day3Temp[i] = (data.list[i].main.temp);
   }
   const max3 = day3Temp.reduce((a, b) => Math.max(a, b), -Infinity);
   const min3 = day3Temp.reduce((a, b) => Math.min(a, b))
   day3.firstElementChild.innerText = `${max3}°F`;
   day3.lastElementChild.innerText = `${min3}°F`;

   let day4Temp = [];
   for (let i = 24; i < 32; i++) {
      day4Temp[i] = (data.list[i].main.temp);
   }
   const max4 = day4Temp.reduce((a, b) => Math.max(a, b), -Infinity);
   const min4 = day4Temp.reduce((a, b) => Math.min(a, b))
   day4.firstElementChild.innerText = `${max4}°F`;
   day4.lastElementChild.innerText = `${min4}°F`;

   let day5Temp = [];
   for (let i = 32; i < 40; i++) {
      day5Temp[i] = (data.list[i].main.temp);
   }
   const max5 = day5Temp.reduce((a, b) => Math.max(a, b), -Infinity);
   const min5 = day5Temp.reduce((a, b) => Math.min(a, b))
   day5.firstElementChild.innerText = `${max5}°F`;
   day5.lastElementChild.innerText = `${min5}°F`;
}

function createIcon (type) {
   const icon = new Image();
   icon.src = type;
   icon.setAttribute('class', 'icon')
   return icon
}

function displayWeather(weatherData) {
   const nameDisplay = document.getElementById('location');
   nameDisplay.innerText = weatherData.name;
   let weatherID = weatherData.weather[0].id;
   let currentIcon = weatherIconType(weatherID);
   nameDisplay.appendChild(createIcon(currentIcon));

   const tempDisplay = document.getElementById('tempDisplay');
   tempDisplay.innerText = `${weatherData.main.temp}°F`;
 
   const humidityDisplay = document.querySelector('.humidity');
   console.log(humidityDisplay);
   humidityDisplay.innerText = `${weatherData.main.humidity}% Humidity`;

   const windDisplay = document.querySelector('.windDisplay');
   let windDirection = getWind(weatherData.wind.deg);
   windDisplay.innerText = `Wind: ${windDirection} ${weatherData.wind.speed} MPH`;

   display.style.backgroundImage = `url(` + weatherBackground(weatherID) + `)`
}

function getWind(degree) {
   if ((degree >= 340 ) || (degree <= 30)) {
      return "N"
   } else if ((degree >= 31 ) && (degree <= 69)) {
      return "NE"
   } else if ((degree >= 70 ) && (degree <= 120)) {
      return "E"
   } else if ((degree >= 121 ) && (degree <= 159)) {
      return "SE"
   } else if ((degree >= 160 ) && (degree <= 200)) {
      return "S"
   } else if ((degree >= 201 ) && (degree <= 249)) {
      return "SW"
   } else if ((degree >= 250 ) && (degree <= 290)) {
      return "W"
   } else if ((degree >= 291 ) && (degree <= 339)) {
      return "NW"
   } else return "?"
}

function weatherBackground (code, time) {
   if (code === 800) {
      return sunBackground
   } else if (code > 800) {
      return cloudyBackground
   } else if ((code >= 600) && (code <= 622)) {
      return snowyBackground
   } else if ((code >= 500) && (code <= 501)) {
      return rainyBackground
   } else if ((code >= 501) && (code <= 531)) {
      return pouringBackground
   } else if ((code >= 300) && (code <= 321)) {
      return  rainyBackground
   } else if ((code >= 200) && (code <= 232)) {
      return thunderBackground
   } else return windyBackground
}

function weatherIconType (code, time) {
   if (code === 800) {
      return sunny
   } else if (code > 800) {
      return cloudy
   } else if ((code >= 600) && (code <= 622)) {
      return snowy
   } else if ((code >= 500) && (code <= 501)) {
      return rainy
   } else if ((code >= 501) && (code <= 531)) {
      return pouring
   } else if ((code >= 300) && (code <= 321)) {
      return  rainy
   } else if ((code >= 200) && (code <= 232)) {
      return lightning
   } else return windy
}