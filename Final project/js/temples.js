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

//display temples from json file
const url = "https://ailenrmansilla.github.io/wdd230/Final%20project/json/temples.json";
const temples_container = document.getElementById('temples-around-the-world');

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject);
    const temples_return = jsonObject['temples'];
    temples_return.forEach(displayTemples);
})

function displayTemples(temple){
    console.log(temple);
    let card = document.createElement('section');
    let city = document.createElement('h3');
    let picture = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('p');
    let closure_schedule = document.createElement('ul');
    let like_button = document.createElement('a');

    picture.setAttribute('src', temple.picture);
    let alt_text = `Picture of ${temple.city} temple`;
    picture.setAttribute('alt', alt_text);
    picture.setAttribute('loading','lazy');

    city.textContent = temple.city;
    address.textContent = temple.address;
    phone.textContent = temple.telephone;
    email.textContent = temple.email;
    closure_schedule.textContent = temple.closureSchedule;
    services.innerHTML = temple.services;
 
    like_button.textContent = 'Like ♥';
    like_button.classList.add('i-like-it');
    like_button.classList.add('temple-like-button');
    let id_button = `${city}-like-button`;
    like_button.setAttribute('id',id_button);


    card.appendChild(city);
    card.appendChild(picture);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(closure_schedule);
    card.appendChild(like_button);

    temples_container.appendChild(card);

};

const button_1 = document.getElementById('')
// const like_button = document.querySelector('#like-button');
// like_button.addEventListener ("click", function() {
//     // change background of button
//     let button_pressed_class = document. getElementsByClassName('liked');
//     like_button.classList.add('liked');
//   });

// local storage 

// let lastVisit = window.localStorage.getItem("lastDayVisited");
// localStorage.setItem("lastDayVisited", today.getTime());
