import './style.css';
import translate, { setCORS } from "google-translate-api-browser";
setCORS("https://cors-anywhere.herokuapp.com/");

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

const button = document.querySelector("button");
const input = document.querySelector("input");
const content = document.querySelector("#content");
const content2 = document.querySelector("#content2");

let weekweather;
let dayweather;
let timezone;
let z;
let def;
let country;
let weekDays = [];


async function getHourlyWeather(city){
  let response = await fetch(`https://api.aerisapi.com/conditions/${city},?format=json&to=+24hours&plimit=24&filter=1hr&fields=periods.dateTimeISO,periods.tempC,periods.humidity,periods.windSpeedKPH,periods.windDir,periods.weather,periods.feelslikeC,periods.icon,periods.pop,profile.tz,place.country&client_id=ruiu3ao4xVVkv5j5qSxjU&client_secret=HD17s1cSLlow3SSBplCttuUak9cJ5lZLp41w5vfm`)
  let weather = await response.json();  
  if (weather.error) {
    console.log(weather.error.description);
    return;
  }
  country = weather.response[0].place.country;
  timezone = weather.response[0].profile.tz;
  dayweather = weather.response[0].periods;
  console.log(dayweather)
}

async function getDailyWeather(city){    
  let response = await fetch(`https://api.aerisapi.com/forecasts/${city},?format=json&filter=day&limit=8&fields=periods.maxTempC,periods.minTempC,periods.humidity,periods.weather,periods.icon,periods.pop,periods.dateTimeISO&client_id=ruiu3ao4xVVkv5j5qSxjU&client_secret=HD17s1cSLlow3SSBplCttuUak9cJ5lZLp41w5vfm`)
  let weather = await response.json();
  if (weather.error) {
    console.log(weather.error.description);
    return;
  }
  weekweather = weather.response[0].periods;
  weekweather = weekweather.slice(1,8)
  console.log(weekweather);
}

button.addEventListener("click", async (event) => {
  event.preventDefault();
  if (!input.value) return;
  let city = input.value;
  input.value = "";
  await getHourlyWeather(city);
  await getDailyWeather(city);
  content.innerHTML = "";
  def = city.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ') + ", " + country.toUpperCase() + " - ";
  z = document.createElement("p"); 
  z.classList.add("z");  
  z.innerHTML = def;  
  let seconddiv = document.createElement("div")
  seconddiv.classList.add("seconddiv")
  let a = document.createElement("p");  
  a.classList.add("a")
  let b = document.createElement("p");
  b.classList.add("b")
  let c = document.createElement("p");
  let d = document.createElement("p");
  let e = document.createElement("p");
  let f = document.createElement("p");
  let icon = new Image();
  icon.src = dayweather[0].icon;
  icon.classList.add("icon");
  a.innerText = Math.round(dayweather[0].tempC) + "° C";
  a.append(icon)
  c.innerText = "Sensación térmica: " + Math.round(dayweather[0].feelslikeC) + "° C";
  d.innerText = "Humedad: " + dayweather[0].humidity + "%";
  e.innerText = "Velocidad del viento: " + Math.round(dayweather[0].windSpeedKPH) + " km/hr";
  f.innerText = "Probabilidad de lluvia: " + dayweather[0].pop + "%";

  /* await translate(dayweather[0].weather, {from: 'en', to: 'es'})
    .then(response => {
      console.log(response)
      b.innerText = response.text;      
  });  */
  b.innerText = dayweather[0].weather;
  
  getSeconds();
  seconddiv.append(c,f,d,e)
  content.append(z,a,b,seconddiv);  
  getWeekDays();  
  appendHours();
})

function getWeekDays(){ 
    let baseDate = new Date();    
    for(let i = 0; i < 8; i++)
    {       
        weekDays.push(baseDate.toLocaleDateString('es-MX', { weekday: 'long', timeZone: timezone }));
        baseDate.setDate(baseDate.getDate() + 1);       
    }
    weekDays = weekDays.map( day => day.charAt(0).toUpperCase() + day.substring(1) ); // capitalizes the days of the week
    weekDays = weekDays.slice(1,8)
    return weekDays;
}

function getSeconds(){
  if (!z) return
  let date = new Date();
  let newdate = date.toLocaleString('en', { timeZone: timezone });
  newdate = newdate.slice(10,21)
  z.innerHTML = def + newdate;
}

setInterval(getSeconds, 1000);

function createDayDivs(day){
  let maindiv = document.createElement("div");
  maindiv.classList.add("daysdiv")
  let p1 = document.createElement("p")
  let p2 = document.createElement("p")
  let p2img = new Image();
  p2img.src = weekweather[day].icon;
  p2img.classList.add("p2img")
  let p3 = document.createElement("p")
  let p4 = document.createElement("p")
  let p5 = document.createElement("p")
  p1.innerText = weekDays[day];
  p2.append(p2img)
  p3.innerText = weekweather[day].maxTempC + "°C - " + weekweather[day].minTempC + "°C";
  p4.innerText = weekweather[day].pop + "%";
  p5.innerText = weekweather[day].humidity + "%";
  maindiv.append(p1,p2,p3,p4,p5)
  return maindiv;
}

function createHourDivs(hour){
  let maindiv = document.createElement("div");
  maindiv.classList.add("hoursdiv")
  let p1 = document.createElement("p")
  let p2 = document.createElement("p")
  let p2img = new Image();
  p2img.src = dayweather[hour].icon;
  p2img.classList.add("p2img")
  let p3 = document.createElement("p")
  let p4 = document.createElement("p")
  let p5 = document.createElement("p")
  p1.innerText = dayweather[hour].dateTimeISO.slice(11,16);
  p2.append(p2img)
  p3.innerText = Math.round(dayweather[hour].tempC) + "°C";
  p4.innerText = dayweather[hour].pop + "%";
  p5.innerText = dayweather[hour].humidity + "%";
  maindiv.append(p1,p2,p3,p4,p5)
  return maindiv;
}

document.addEventListener("click", e => {                     
  if (e.target.matches(".pordia")) {
      e.stopImmediatePropagation();          
      appendDays();
}})

document.addEventListener("click", e => {                     
  if (e.target.matches(".porhora")) {
      e.stopImmediatePropagation();          
      appendHours();
}})

function appendHours(){
  content2.innerHTML = `<div id="pronostico">Pronóstico</div>
  <div id="buttonsdiv">
      <button class="porhora">Por hora</button>
      <button class="pordia">Por dia</button>
  </div>
  <div id="labels">
      <p>Hora</p>
      <p>Clima</p>
      <p>Temperatura</p>
      <p>Prob. de lluvia</p>
      <p>Humedad</p>
  </div>`;
  for (let x = 1; x < 24; x++){
    content2.append(createHourDivs(x))
  }
}

function appendDays(){  
  content2.innerHTML = `<div id="pronostico">Pronóstico</div>
  <div id="buttonsdiv">
      <button class="porhora">Por hora</button>
      <button class="pordia">Por dia</button>
  </div>
  <div id="labels">
      <p>Día</p>
      <p>Clima</p>
      <p>Temperatura</p>
      <p>Prob. de lluvia</p>
      <p>Humedad</p>
  </div>`;
  for (let x = 0; x < 7; x++){
    content2.append(createDayDivs(x))
  }
}

async function onLoad(){
  let city = "Culiacan";
  await getHourlyWeather(city);
  await getDailyWeather(city);
  def = city.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ') + ", " + country.toUpperCase() + " - ";
  z = document.createElement("p"); 
  z.classList.add("z");  
  z.innerHTML = def;  
  let seconddiv = document.createElement("div")
  seconddiv.classList.add("seconddiv")
  let a = document.createElement("p");  
  a.classList.add("a")
  let b = document.createElement("p");
  b.classList.add("b")
  let c = document.createElement("p");
  let d = document.createElement("p");
  let e = document.createElement("p");
  let f = document.createElement("p");
  let icon = new Image();
  icon.src = dayweather[0].icon;
  icon.classList.add("icon");
  a.innerText = Math.round(dayweather[0].tempC) + "° C";
  a.append(icon)
  c.innerText = "Sensación térmica: " + Math.round(dayweather[0].feelslikeC) + "° C";
  d.innerText = "Humedad: " + dayweather[0].humidity + "%";
  e.innerText = "Velocidad del viento: " + Math.round(dayweather[0].windSpeedKPH) + " km/hr";
  f.innerText = "Probabilidad de lluvia: " + dayweather[0].pop + "%";

  // translate

  b.innerText = dayweather[0].weather;
  
  getSeconds();
  seconddiv.append(c,f,d,e)
  content.append(z,a,b,seconddiv);  
  getWeekDays();  
  appendHours();
}

onLoad();
