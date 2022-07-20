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

const url = "https://ailenrmansilla.github.io/wdd230/Final%20project/json/temples.json";
const temples_container = document.getElementById('temples-around-the-world');

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject);
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
})

function displayTemples(temple){
    console.log(temple);
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let picture = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('p');
    let closure_schedule = document.createElement('p');

    picture.setAttribute('src', temple.icon);
    let alt_text = `Icon of ${temple.name} - ${temple.membershiplevel} member of the Chamber`;
    picture.setAttribute('alt', alt_text);
    picture.setAttribute('loading','lazy');

    name.textContent = temple.name;
    address.textContent = temple.address;
    phone.textContent = temple.phone;
    website.textContent = temple.website;
    membership_level.textContent = `${temple.membershiplevel} member`;

    card.appendChild(name);
    card.appendChild(picture);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership_level);
    
    templesDirectory.appendChild(card);
    templesDirectory.classList.add("grid");

}