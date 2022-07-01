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


//banner on mondays and tuesdays
const today_day = today.getDate();
if (today_day == 1 || today_day ==2){
    document.getElementById("banner").style.display = "block";
}


// I moved the fetch for directory it to another js file to avoid erros
//also the things for the join.html, and discover.html pages

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