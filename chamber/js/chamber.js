const LastModif = new Date(document.lastModified);
const day = LastModif.getDate();
const month = LastModif.getMonth();
const year = LastModif.getFullYear();
const hour = LastModif.getHours();
const minute = LastModif.getMinutes();
const second = LastModif.getSeconds();
const last_modified = `${month}/${day}/${year} ${hour}:${minute}:${second}`;

document.querySelector('#updated').textContent = last_modified;

//togglemenu

function toggleMenu(){

    document.getElementById("primary-nav").classList.toggle("open");

}
const x=document.getElementById("hamburger-button");
x.onclick= toggleMenu;

window.onresize = () => {if(window.innerWidth>992){
    document.getElementById("primary-nav").classList.remove("open");
}
};

//current date
const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);
console.log(fulldate);
document.getElementById("current-date").textContent = fulldate;

//for the join.html page

// const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
// document.querySelector("#time").value = time;
// document.querySelector('#date').value = fulldate.toString();

//banner on mondays and tuesdays
const today_day = today.getDate();
if (today_day == 1 || today_day ==2){
    document.getElementById("banner").style.display = "block";
}

//lazy loading code
let imagesToLoad = document.querySelectorAll('img[data-src]');


function preloadImage(image) {
    const src = image.getAttribute('data-src');
    if (!src){
        return;
    } 
    image.src = src;
    image.removeAttribute("data-src");
};

const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const imageObserver = new IntersectionObserver((entries,imageObserver) =>{
    entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return; 
    } else{
        preloadImage(entry.target);
        imageObserver.unobserve(entry.target);
    }
})} , imageOptions);

imagesToLoad.forEach(image =>{
    imageObserver.observe(image);
});

// local storage FIX 

let lastVisit = window.localStorage.getItem("lastDayVisited");
//we get the miliseconds since last visit
let timeSinceVisited = today.getTime() - lastVisit;
console.log(timeSinceVisited);
// we calculate how many days ago they visited the page
const daysSince = Math.round(timeSinceVisited/86400000);
// set the value in localStorage
localStorage.setItem("lastDayVisited", today.getTime());
// display the days since last visit
document.getElementById('daysSinceLastVisit').textContent = `You visited this page ${daysSince} days ago.`

// I moved the fetch for directory it to another js file to avoid erros

// weather api
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const w_description = document.querySelector('#w-description');
const wind_speed = document.querySelector('#windspeed');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Rosario&appid=60633ca87c7e957770d0cc5f4979e0ad&units=imperial'
async function apiWeatherFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // fot testing the call
        displayResults(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const desc_capi = desc[0].toUpperCase() + desc.substring(1);
    const wind = weatherData.wind.speed;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    w_description.textContent = desc_capi;
    wind_speed.textContent = wind;
  }
  apiWeatherFetch();