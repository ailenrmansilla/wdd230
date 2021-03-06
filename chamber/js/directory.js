//current date
const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);
console.log(fulldate);
document.getElementById("current-date").textContent = fulldate;

//last last_modified
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




//json and fecth api code and buttons event listeners
const url = "https://ailenrmansilla.github.io/wdd230/chamber/json/data.json";
const contactsDirectory = document.querySelector('.directory-contacts');

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject);
    const contacts = jsonObject['directory'];
    contacts.forEach(displayDirectory);
})

function displayDirectory(contact){
    console.log(contact);
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let picture = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let membership_level = document.createElement('p');

    picture.setAttribute('src', contact.icon);
    let alt_text = `Icon of ${contact.name} - ${contact.membershiplevel} member of the Chamber`;
    picture.setAttribute('alt', alt_text);
    picture.setAttribute('loading','lazy');

    name.textContent = contact.name;
    address.textContent = contact.address;
    phone.textContent = contact.phone;
    website.textContent = contact.website;
    membership_level.textContent = `${contact.membershiplevel} member`;

    card.appendChild(name);
    card.appendChild(picture);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership_level);
    
    contactsDirectory.appendChild(card);
    contactsDirectory.classList.add("grid");
}
// depending on what view they choose
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".directory-contacts");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}