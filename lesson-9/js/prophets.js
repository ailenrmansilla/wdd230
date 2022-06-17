const url="https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector('.cards');

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
})

function displayProphets(prophet){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birth_date = document.createElement('p');
    let place_birth = document.createElement('p');

    let prophet_fullname = `${prophet.name} ${prophet.lastname}`;
    h2.textContent = prophet_fullname;

    portrait.setAttribute('src', prophet.imageurl);
    let prophet_number = `${prophet.order}th`;
    if (prophet.order == '1'){
        prophet_number = `${prophet.order}st`;
    }
    else if(prophet.order == '2'){
        prophet_number = `${prophet.order}nd`;
    }
    else if(prophet.order == '3'){
        prophet_number = `${prophet.order}rd`;
    }
    let alt_text = `Portrait of ${prophet_fullname} - ${prophet_number} Latter-day President`;
    portrait.setAttribute('alt', alt_text);
    portrait.setAttribute('loading','lazy');

    birth_date.textContent = `Date of Birth: ${prophet.birthdate}`;
    place_birth.textContent = `Place of Birth: ${prophet.birthplace}`;

    card.appendChild(h2);
    card.appendChild(birth_date);
    card.appendChild(place_birth);
    card.appendChild(portrait);

    document.querySelector('div.cards').appendChild(card);
}
