import './style.css';
import translate, { setCORS } from "google-translate-api-browser";
setCORS("http://cors-anywhere.herokuapp.com/");

const button = document.querySelector("button");
const input = document.querySelector("input");
const content = document.querySelector("#content");

let weekweather;
let dayweather;
let timezone;
let z;
let def;
let country;
const locales = {"us": "en-US", "mx": "es-MX"};

async function getHourlyWeather(city){
  let response = await fetch(`https://api.aerisapi.com/conditions/${city},?format=json&to=+24hours&plimit=24&filter=1hr&fields=periods.dateTimeISO,periods.tempC,periods.humidity,periods.windSpeedKPH,periods.windDir,periods.weather,periods.feelslikeC,profile.tz,place.country&client_id=ruiu3ao4xVVkv5j5qSxjU&client_secret=HD17s1cSLlow3SSBplCttuUak9cJ5lZLp41w5vfm`)
  let weather = await response.json();  
  if (weather.error) {
    console.log(weather.error.description);
    return;
  }
  country = weather.response[0].place.country;
  timezone = weather.response[0].profile.tz;
  dayweather = weather.response[0].periods;
  console.log(dayweather, timezone, country)
}

async function getDailyWeather(city){    
  let response = await fetch(`https://api.aerisapi.com/forecasts/${city},?format=json&filter=day&limit=8&fields=periods.maxTempC,periods.minTempC,periods.humidity,periods.weather,periods.pop,periods.dateTimeISO&client_id=ruiu3ao4xVVkv5j5qSxjU&client_secret=HD17s1cSLlow3SSBplCttuUak9cJ5lZLp41w5vfm`)
  let weather = await response.json();
  if (weather.error) {
    console.log(weather.error.description);
    return;
  }
  weekweather = weather.response[0].periods;
  console.log(weekweather);
}

button.addEventListener("click", async (event) => {
  event.preventDefault();
  if (!input.value) return;
  let city = input.value;
  input.value = "";
  await getHourlyWeather(city);
  // await getDailyWeather(city);
  content.innerHTML = "";

  def = city.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ') + ", " + country.toUpperCase() + " - ";
  z = document.createElement("p"); 
  z.classList.add("z");  
  z.innerHTML = def;  
  
  let a = document.createElement("p");  
  let b = document.createElement("p");
  let c = document.createElement("p");
  let d = document.createElement("p");
  let e = document.createElement("p");
  let f = document.createElement("p");
  b.innerText = "Temperatura: " + Math.round(dayweather[0].tempC) + " °C";
  c.innerText = "Sensación térmica: " + Math.round(dayweather[0].feelslikeC) + " °C";
  d.innerText = "Humedad: " + dayweather[0].humidity + " %";
  e.innerText = "Viento: " + Math.round(dayweather[0].windSpeedKPH) + " km/h";
  f.innerText = "Dirección del viento: " + dayweather[0].windDir;
  await translate(dayweather[0].weather, {from: 'en', to: 'es'})
    .then(response => {
      a.innerText = response.text
    });
  getSeconds();
  content.append(z,a,b,c,d,e,f);   
  // getWeekDays();
})

function translateWeather(weather){
  // translate weather (maybe use switch(weather{case:...etc)
}

function getWeekDays()
{ 
    let baseDate = new Date(weekweather[0].dateTimeISO.slice(0,10)); // current date
    console.log(baseDate)
    let weekDays = [];
    for(i = 0; i < 8; i++)
    {       
        weekDays.push(baseDate.toLocaleDateString(locales.country, { weekday: 'long', timeZone: 'UTC' }));
        baseDate.setDate(baseDate.getDate() + 1);       
    }
    weekDays = weekDays.map( day => day.charAt(0).toUpperCase() + day.substring(1) ); // capitalizes the days of the week
    console.log(weekDays);
}

function getSeconds(){
  if (!z) return
  let date = new Date();
  let newdate = date.toLocaleString(locales.country, { timeZone: timezone });
  newdate = newdate.slice(10,21)
  z.innerHTML = def + newdate;
}

setInterval(getSeconds, 1000);

