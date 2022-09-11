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
   console.log('dddd')
   dropdownButton.innerText = "Zip Code:"
}


   let confirmBtn = document.querySelector('.confirm')
   confirmBtn.onclick = () => {
      if (dropdownButton.innerText = 'Zip Code') {
         let zipValue = document.getElementById('search').value;
         console.log(zipValue);
         getWeatherDataZip(zipValue)
      }
   }

async function getWeatherDataZip(zip) {
   // let weatherCall = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

   let getCoors = await fetch (`http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=7100239e64c481b759f7889a357558f4`, {mode: 'cors'});
   let coorData = await getCoors.json();
   console.log(coorData);
   let lattitute = coorData.lat;
   let longitude = coorData.lon;
   
  // let weatherResponse = await fetch ('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=7100239e64c481b759f7889a357558f4', {mode: 'cors'});

   let unit = 'imperial'
  
  let weatherCall = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lattitute}&lon=${longitude}&appid=7100239e64c481b759f7889a357558f4&units=${unit}`, {mode: 'cors'});
  let weather = await weatherCall.json();
  console.log(weather)
   //console.log(weatherData[0].lat)


}
// getWeatherData();