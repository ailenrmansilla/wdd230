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
    let card = document.createElement('section');
    let city = document.createElement('h3');
    let picture = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('ul');
    let closure_schedule = document.createElement('ul');
    let like_button = document.createElement('button');

    picture.setAttribute('src', temple.picture);
    let alt_text = `Picture of ${temple.city} temple`;
    picture.setAttribute('alt', alt_text);
    picture.setAttribute('loading','lazy');

    city.textContent = temple.city;
    address.textContent = temple.address;
    phone.textContent = temple.telephone;
    email.textContent = temple.email;
    closure_schedule.innerHTML = temple.closureSchedule;
    services.innerHTML = temple.services;
 
    like_button.innerHTML = 'Like ♥';
    like_button.classList.add('temple-like-button');
    like_button.setAttribute('id',temple.id);
    like_button.setAttribute('name','like-button');
    like_button.setAttribute('type','button');

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
// try to move this inside to after creating the button
document.querySelector('#temple1').addEventListener("click", function(){
    setInStorage("temple1");
});
document.querySelector('#temple2').addEventListener("click", function(){
    setInStorage("temple2");
});
document.querySelector('#temple3').addEventListener("click", function(){
    setInStorage("temple3");
});
document.querySelector('#temple4').addEventListener("click", function(){
    setInStorage("temple4");
});
document.querySelector('#temple5').addEventListener("click", function(){
    setInStorage("temple5");
});

function setInStorage(id){
    localStorage.setItem("liked", id);
}
const liked = localStorage.getItem("liked"); //returns the id of that button
document.getElementById(liked).style.backgroundColor = "#9d5b66";
document.getElementById(liked).style.color = "#FEFAE0";