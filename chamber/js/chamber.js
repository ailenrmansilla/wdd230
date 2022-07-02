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

//json file and fecth api code to show the spotlights
const url_directory = "https://ailenrmansilla.github.io/wdd230/chamber/json/data.json";


fetch(url_directory)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject);
    const contacts = jsonObject['directory'];
    contacts.forEach(displaySpotlights);
})

function displaySpotlights(contact){
  const spotlight = document.querySelector('#spotlight');
  if (spotlight.children.length < 3) {
    if(contact.membershiplevel == "Golden"||contact.membershiplevel == "Silver"){
      let card = document.createElement('div');
      let name = document.createElement('p');
      let picture = document.createElement('img');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let membership_level = document.createElement('p');

      picture.setAttribute('src', contact.icon);
      let alt_text = `Icon of ${contact.name} - ${contact.membershiplevel} member of the Chamber`;
      picture.setAttribute('alt', alt_text);
      picture.setAttribute('loading','lazy');

      name.textContent = contact.name;
      address.textContent = contact.address;
      phone.textContent = contact.phone;
      membership_level.textContent = `${contact.membershiplevel} member`;

      card.appendChild(name);
      card.appendChild(picture);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(membership_level);
      card.classList.add("spotlights");
      
      if (spotlight.children.length == 0){
        card.setAttribute("id","spotlight-1")
      }else if(spotlight.children.length == 1){
        card.setAttribute("id","spotlight-2")
      }else if(spotlight.children.length == 2){
        card.setAttribute("id","spotlight-3")
      }
      spotlight.appendChild(card);
  }
}}