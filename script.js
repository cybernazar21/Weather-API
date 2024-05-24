import './cities.js'
import { allCities } from './cities.js';
// import { citiesMap } from './cities.js';

const body = document.body;
const apiKey = 'e410e2efa02a4fc69fb174528242105';


// http://api.weatherapi.com/v1/current.json?key=e410e2efa02a4fc69fb174528242105&q=London

// Масив для збереження усіх міст. Його більше не використовую, бо замінив його на citiesMap
// const allCities = [toronto, rome, kyiv, canberra, brasilia, warsaw, london];





// Додаємо обробник подій для кожної кнопки міста
allCities.forEach(city => {
    city.addEventListener('click', function() {
        const selectedCity = this.id;
        handleCitySelection(selectedCity);
    });
});

// Object.keys(citiesMap).forEach(cityId => {
//     const cityElement = document.getElementById(cityId);
//     cityElement.addEventListener('click', function() {
//         handleCitySelection(cityId);
//     });
// });

function createCard(data) {
    return `
    <div class="card">

<h2 class="card-city">${data.location.name}, <span>${data.location.country}</span></h2>

<div class="card-weather">
        <h4 class="card-value">Temp ${data.current.temp_c} °С</h4>

        <img src="${data.current.condition.icon}" alt="Weather" class="card-img">
</div>

<div class="card-description">
<h3>${data.current.condition.text}</h3>
<h3>${data.current.last_updated}</h3></div>

</div>`;
};

function displayCard(html) {
    // Створюємо новий елемент div для Card.
    const divCard = document.createElement('div');
    divCard.innerHTML = html;
    body.appendChild(divCard);
};

function removeCard() {
    const existingCard = document.querySelector('.card');
    if (existingCard) {
        existingCard.remove();
    }
}

function handleCitySelection(selectedCity) {
    removeCard();
    const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCity}`;

    // Викликаємо API для отримання погоди обраного міста
    fetch(query)
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        const html = createCard(data);
        displayCard(html);
        console.log(data);
        console.log(data.location.name);
        console.log(data.location.country);
        console.log(`Temp ${data.current.temp_c} °С`);
        console.log(`Feels like ${data.current.feelslike_c} °С`);
        console.log(data.current.condition.text);
    })
    .catch(error => {
        console.log(error.message)});
};

