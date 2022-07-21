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
    let services = document.createElement('ul');
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
    closure_schedule.innerHTML = temple.closureSchedule;
    services.innerHTML = temple.services;
 
    like_button.textContent = 'Like ♥';
    like_button.classList.add('temple-like-button');
    let id_button = temple.id;
    like_button.setAttribute('id',id_button);
    // other option like_button.setAttribute('onclick',saveLike(temple.id))


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

const button_1 = document.getElementById('temple1');
button_1.onclick = saveLike('temple1');
const button_2 = document.getElementById('temple2');
button_2.onclick = saveLike('temple2');
const button_3 = document.getElementById('temple3');
button_3.onclick = saveLike('temple3');
const button_4 = document.getElementById('temple4');
button_4.onclick = saveLike('temple4');
const button_5 = document.getElementById('temple5');
button_5.onclick = saveLike('temple5');
 //if they click it to mark like, we save it in local storage, if they dont like it we remove it
function saveLike(button){
    localStorage.setItem(button,"liked");
    let my_button = document.getElementById(button);

// I wanted to chenge its style here so it looks liked but it is not working
// also it only stores the like for the first temple
    

    // my_button.classList.toggle('i-like-it');
    // if (my_button.classList.toggle('i-like-it') === false){
    //     localStorage.removeItem(button);
    // };
}

