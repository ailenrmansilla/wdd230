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
document.getElementById("date").value = fulldate;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
document.getElementById("time").value = time;

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
    rootMargin: "0px 0px 500px 0px"
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

// local storage

// initialize display elements
const visitsDisplay = document.querySelector("#visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

