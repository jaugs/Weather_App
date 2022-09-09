import './style.css';
import sun from './sun.svg';


    const element = document.createElement('div');
    element.innerHTML = 'hello';
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = sun;
 
   element.appendChild(myIcon);
  document.body.appendChild(element);


const container = document.querySelector('.container');
const header  = document.querySelector('.heading');

async function getWeatherData() {
   // let weatherCall = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
   let weatherResponse = await fetch ('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=7100239e64c481b759f7889a357558f4', {mode: 'cors'});
   let weatherData = await weatherResponse.json();
   let lattitute = weatherData[0].lat;
   let longitude = weatherData[0].lon;
    let unit = 'imperial'
  
   let weatherCall = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lattitute}&lon=${longitude}&appid=7100239e64c481b759f7889a357558f4&units=${unit}`, {mode: 'cors'});
   let weather = await weatherCall.json();
   console.log(weather)
   //console.log(weatherData[0].lat)


}
getWeatherData();