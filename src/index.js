import './style.css';
import sun from './sun.svg';
import printMe from './print.js';


const container = document.querySelector('.container');
const header = document.querySelector('.header');
   const myIcon = new Image();
   myIcon.src = sun;
container.appendChild(myIcon);


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


function displayWeather(weatherData) {
   const display = document.getElementById('display');
   const tempDisplay = document.createElement('div');
   tempDisplay.setAttribute('class', 'temp');
   const currentTemp = weatherData.main.temp;
   console.log(currentTemp);
   tempDisplay.innerText = currentTemp;
   display.appendChild(tempDisplay);
   if (currentTemp > 90) {
      console.log('sunny')
      display.setAttribute('class', 'hot')

   }

}
