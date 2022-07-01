//current date
const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);
console.log(fulldate);
document.getElementById("current-date").textContent = fulldate;
//for the join.html page
document.querySelector('#date-time').value = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
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

//banner on mondays and tuesdays
const today_day = today.getDate();
if (today_day == 1 || today_day ==2){
    document.getElementById("banner").style.display = "block";
}


