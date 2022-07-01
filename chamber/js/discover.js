//current date
const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);
console.log(fulldate);
document.getElementById("current-date").textContent = fulldate;

// local storage 

let lastVisit = window.localStorage.getItem("lastDayVisited");
//we get the miliseconds since last visit
let timeSinceVisited = today.getTime() - lastVisit;
console.log(timeSinceVisited);
// we calculate how many days ago they visited the page
const daysSince = Math.round(timeSinceVisited/86400000);
// set the value in localStorage
localStorage.setItem("lastDayVisited", today.getTime());
// display the days since last visit
document.getElementById('daysSinceLastVisit').textContent = `You visited this page ${daysSince} days ago.`;

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

