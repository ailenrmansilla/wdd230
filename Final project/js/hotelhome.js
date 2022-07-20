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

//last modified date
const LastModif = new Date(document.lastModified);
const day = LastModif.getDate();
const month = LastModif.getMonth();
const year = LastModif.getFullYear();
const hour = LastModif.getHours();
const minute = LastModif.getMinutes();
const second = LastModif.getSeconds();
const last_modified = `${month}/${day}/${year} ${hour}:${minute}:${second}`;

document.querySelector('#updated').textContent = last_modified;

//current date
const today = new Date();
const current_year = document.getElementById('current-year');
current_year.textContent = today.getFullYear();

// weather api
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const w_description = document.querySelector('#weather-description');
const humidity = document.querySelector('#humidity');


const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=43.61&lon=-116.39&appid=60633ca87c7e957770d0cc5f4979e0ad&units=imperial'
async function apiWeatherFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0].description;
    const desc_capi = desc[0].toUpperCase() + desc.substring(1);
    const w_humidity = weatherData.current.humidity;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    w_description.textContent = desc_capi;
    humidity.textContent = w_humidity;

    //forecast for next three days
    let tomorrow = new Date(weatherData.daily[1].dt*1000).toDateString();
    let oneday_aftertomorrow = new Date(weatherData.daily[2].dt*1000).toDateString();
    let twodays_aftertomorrow = new Date(weatherData.daily[3].dt*1000).toDateString();
    
    const day_1 = document.querySelector('#day-1');
    let date_day1 = document.createElement('p');
    date_day1.textContent = tomorrow;
    let temperate_1 = document.createElement('p');
    let icon_src = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;
    temperate_1.textContent = `${weatherData.daily[1].temp.day.toFixed(0)} °F`;
    let icon_1 = document.createElement('img');
    icon_1.setAttribute('src',icon_src)
    icon_1.setAttribute('alt', 'weather description');

    day_1.appendChild(date_day1);
    day_1.appendChild(temperate_1);
    day_1.appendChild(icon_1);

    const day_2 = document.querySelector('#day-2');
    let date_day2 = document.createElement('p');
    date_day2.textContent = oneday_aftertomorrow;
    let temperate_2 = document.createElement('p');
    temperate_2.textContent = `${weatherData.daily[2].temp.day.toFixed(0)} °F`;
    icon_src = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;
    let icon_2 = document.createElement('img');
    icon_2.setAttribute('src',icon_src)
    icon_2.setAttribute('alt', 'weather description');

    day_2.appendChild(date_day2);
    day_2.appendChild(temperate_2);
    day_2.appendChild(icon_2);

    const day_3 = document.querySelector('#day-3');
    let date_day3 = document.createElement('p');
    date_day3.textContent = twodays_aftertomorrow;
    let temperate_3 = document.createElement('p');
    temperate_3.textContent = `${weatherData.daily[3].temp.day.toFixed(0)} °F`;
    icon_src = `https://openweathermap.org/img/w/${weatherData.daily[3].weather[0].icon}.png`;
    let icon_3 = document.createElement('img');
    icon_3.setAttribute('src',icon_src)
    icon_3.setAttribute('alt', 'weather description');

    day_3.appendChild(date_day3);
    day_3.appendChild(temperate_3);
    day_3.appendChild(icon_3);

  }
  apiWeatherFetch();
