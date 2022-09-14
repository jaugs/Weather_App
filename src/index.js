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
import printMe from './print.js';


const container = document.querySelector('.container');
const header = document.querySelector('.header');
   // const myIcon = new Image();
   // myIcon.src = cloudy;
// container.appendChild(myIcon);


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
   // console.log('dddd')
   dropdownButton.innerText = "Zip Code:"
}
   let confirmBtn = document.querySelector('.confirm')
   confirmBtn.onclick = async () => {
      if (dropdownButton.innerText = 'Zip Code') {
         let zipValue = document.getElementById('search').value;
         console.log(zipValue);
       let weather = await getWeatherDataZip(zipValue)
       
      // return weather
      }
   }

// console.loweather);

  // console.log(weather);
async function getWeatherDataZip(zip) {
   // let weatherCall = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

   let getCoors = await fetch (`http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=7100239e64c481b759f7889a357558f4`, {mode: 'cors'});
   let coorData = await getCoors.json();
  // console.log(coorData);
   let lattitute = coorData.lat;
   let longitude = coorData.lon;
   
  // let weatherResponse = await fetch ('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=7100239e64c481b759f7889a357558f4', {mode: 'cors'});

   let unit = 'imperial'
  
  let weatherCall = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lattitute}&lon=${longitude}&appid=7100239e64c481b759f7889a357558f4&units=${unit}`, {mode: 'cors'});
  let weather = await weatherCall.json();
  console.log(weather);
  displayWeather(weather);


}


function createIcon (type) {
   const icon = new Image();
   icon.src = type;
   icon.setAttribute('class', 'icon')
   return icon
}

function displayWeather(weatherData) {
   const display = document.getElementById('display');
   const tempDisplay = document.createElement('div');
   tempDisplay.setAttribute('class', 'tempDisplay');
   const temperature = document.createElement('div')
   temperature.innerText = weatherData.main.temp;
   let unit = document.createElement('div');
   unit.setAttribute('class', 'unit');
   unit.innerText = ' °F';
   tempDisplay.appendChild(temperature);
   tempDisplay.appendChild(unit);
   display.appendChild(tempDisplay);


   let weatherID = weatherData.weather[0].id;
   let currentIcon = weatherIconType(weatherID);
   display.appendChild(createIcon(currentIcon));

   
  

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